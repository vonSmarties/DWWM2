import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeActuComponent } from './liste-actu/liste-actu.component';
import { ActuComponent } from './actu/actu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';

import { ActuService } from './services/actu.service';
import { ConnexionService } from './services/connexion.service';

import { AuthIntercepteur } from './services/auth.intercepteur';
import { SecuriteIntercepteur } from './services/securite.intercepteur';

import { NewsPipe } from './liste-actu/news.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiedComponent,
    AccueilComponent,
    ListeActuComponent,
    ActuComponent,
    ConnexionComponent,
    EditionComponent,
    NewsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ActuService,
    ConnexionService,
    { provide: HTTP_INTERCEPTORS, useClass:AuthIntercepteur, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:SecuriteIntercepteur, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
