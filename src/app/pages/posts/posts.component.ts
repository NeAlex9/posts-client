import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/services/post/models/post.model';
import { PostService } from 'src/app/services/post/post.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  isCreateFormOpen: boolean = false;
  isLoading: boolean = true;

  constructor(
    private postService: PostService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.postService.pullPosts()
      .subscribe({
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.snackbarService.openFailureSnackBar('Failed to retrieve posts');
        }
      });

    this.postService.postsSubject
      .subscribe(posts => {
        this.posts = posts;
        this.isLoading = false;
      });
  }

  openPostCreationForm(): void {
    this.isCreateFormOpen = true;
  }

  closePostCreationForm(): void {
    this.isCreateFormOpen = false;
  }
}
