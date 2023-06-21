import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './models/post.model';
import { CreatePostCommand } from './models/create-post.model';
import { Subject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string = "https://localhost:7107/api/posts";
  postsSubject: Subject<Post[]> = new Subject<Post[]>();
  error: Subject<Error> = new Subject<Error>();

  constructor(
    private http: HttpClient,
  ) { }

  pullPosts(): void {
    this.http.get<Post[]>(`${this.baseUrl}`)
      .pipe(
        tap((posts: Post[]) => {
          this.postsSubject.next(posts);
        }));
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  createPost(command: CreatePostCommand): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, command)
    .pipe(
      catchError((error: Error)=>{
        this.error.next(error);
        return throwError(() => error);
      })
    );
  }
}
