import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/services/post/models/post.model';
import { PostService } from 'src/app/services/post/post.service';

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
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.pullPosts();
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
