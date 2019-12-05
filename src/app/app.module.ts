import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NouveauTopicComponent } from './nouveau-topic/nouveau-topic.component';
import { ReadComponent } from './read/read.component';
import { CommentaireComponent } from './read/commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NouveauTopicComponent,
    ReadComponent,
    CommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
