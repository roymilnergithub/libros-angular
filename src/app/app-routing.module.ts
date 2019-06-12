import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SecretComponent } from './pages/secret/secret.component';
// album
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  {
    path: 'albums',
    component: AlbumsComponent,
    children: [
      { path: '', component: AlbumListComponent },
      { path: 'view/:id', component: AlbumDetailsComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
