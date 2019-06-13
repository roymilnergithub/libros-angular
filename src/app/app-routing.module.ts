import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { RecomendadosComponent } from './pages/recomendados/recomendados.component';
import { LiteraturaComponent } from './pages/literatura/literatura.component';
import { AustralComponent } from './pages/austral/austral.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
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
  { path: 'recomendados', component: RecomendadosComponent },
  { path: 'literatura', component: LiteraturaComponent },
  { path: 'austral', component: AustralComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
