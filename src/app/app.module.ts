import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/posts/components/post/post.component';
import { PostCreationFormComponent } from './pages/posts/components/post-creation-form/post-creation-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostCreationFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
