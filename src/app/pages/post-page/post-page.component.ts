import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { Post } from 'src/app/services/post/models/post.model';
import { PostService } from 'src/app/services/post/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: Post | null;
  isLoading: boolean = true;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.postService.getPost(params["postId"])),
      catchError(error => {
        console.log(error);
        return of(null);
      }),
    ).subscribe((post: Post | null) => {
      this.isLoading = false;
      this.post = post;
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}
