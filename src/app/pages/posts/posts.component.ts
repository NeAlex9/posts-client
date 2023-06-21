import { Component, OnInit } from '@angular/core';
import { Subscription, take, timer } from 'rxjs';
import { Post } from 'src/app/services/post/models/post.model';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  error?: Error;
  isCreateFormOpen: boolean = false;
  errorTimeout: Subscription | undefined;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.pullPosts();
    this.postService.postsSubject
      .subscribe(posts => {
        this.posts = posts;
      });
    this.postService.error
      .subscribe((error: Error) => {
        this.error = error;
        this.startErrorTimeout();
      });
  }

  openPostCreationForm(): void {
    this.isCreateFormOpen = true;
  }

  closePostCreationForm(): void {
    this.isCreateFormOpen = false;
  }

  startErrorTimeout(): void {
    this.errorTimeout?.unsubscribe();
    this.errorTimeout = timer(5000)
      .pipe(
        take(1)).subscribe(() => {
          this.error = undefined;
        });
  }
}
