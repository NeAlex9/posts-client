import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './models/post.model';
import { CreatePostCommand } from './models/create-post.model';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private limit: number = 15;
  postsSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor(
    private http: HttpClient,
  ) { }

  pullPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts?limit=${this.limit}`)
      .pipe(
        tap((posts: Post[]) => {
          this.postsSubject.next(posts);
        }));
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  createPost(command: CreatePostCommand): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/posts`, command);
  }
}
