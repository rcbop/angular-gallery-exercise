import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImageDetailsComponent,
    NavbarComponent,
    ErrorComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
