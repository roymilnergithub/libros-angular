import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './elements/nav/nav.component';
import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { FooterComponent } from './elements/footer/footer.component';

import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumsService } from './albums/albums.service';
import { AlbumListComponent } from './albums/album-list/album-list.component';

import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SecretComponent } from './pages/secret/secret.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    FooterComponent,

    AlbumsComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    AlbumListComponent,

    NovedadesComponent,
    ContactComponent,
    SecretComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
