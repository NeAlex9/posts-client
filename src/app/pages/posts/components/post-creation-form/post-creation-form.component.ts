import { Component, EventEmitter, Output } from '@angular/core';
import { CreatePostCommand } from 'src/app/services/post/models/create-post.model';
import { PostService } from 'src/app/services/post/post.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-post-creation-form',
  templateUrl: './post-creation-form.component.html',
  styleUrls: ['./post-creation-form.component.css']
})
export class PostCreationFormComponent {

  @Output() close: EventEmitter<any> = new EventEmitter();

  isLoading: boolean = false;
  createPostCommand: CreatePostCommand = {
    title: '',
    score: 0,
    createdAt: new Date(),
  };

  constructor(
    private postService: PostService,
    private snackbarService: SnackbarService
  ) { }

  createPost() {
    this.isLoading = true;
    this.postService.createPost(this.createPostCommand)
      .subscribe({
        next: () => {
          this.postService.pullPosts();
          this.snackbarService.openSuccessSnackBar('Post has create successfuly');
        },
        error: (error) => {
          console.log(error);
          this.snackbarService.openFailureSnackBar('Failed to create post');
        }
      }).add(() => {
        this.isLoading = false;
        this.closePostCreationForm();
      });
  }

  closePostCreationForm() {
    this.close.emit();
  }
}
