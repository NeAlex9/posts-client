import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/posts/components/post/post.component';
import { PostCreationFormComponent } from './pages/posts/components/post-creation-form/post-creation-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostCreationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
