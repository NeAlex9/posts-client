import { Component } from '@angular/core';
import { CreatePostCommand } from 'src/app/services/post/models/create-post.model';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-creation-form',
  templateUrl: './post-creation-form.component.html',
  styleUrls: ['./post-creation-form.component.css']
})
export class PostCreationFormComponent {

  constructor(
    private postService: PostService
  ) { }

  createPost(command: CreatePostCommand) {
    this.postService.createPost(command)
      .subscribe({
        next: () => {
          this.postService.pullPosts();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
