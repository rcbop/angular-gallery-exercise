import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ErrorComponent } from './error/error.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', component: ImageGalleryComponent },
  { path: 'images/:id', component: ImageDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
