import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/posts/components/post/post.component';
import { PostCreationFormComponent } from './pages/posts/components/post-creation-form/post-creation-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostCreationFormComponent,
    HeaderComponent
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
