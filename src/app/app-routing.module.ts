import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':postId',
        component: PostPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }