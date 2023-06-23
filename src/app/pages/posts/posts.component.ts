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

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.pullPosts();
    this.postService.postsSubject
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  openPostCreationForm(): void {
    this.isCreateFormOpen = true;
  }

  closePostCreationForm(): void {
    this.isCreateFormOpen = false;
  }
}
