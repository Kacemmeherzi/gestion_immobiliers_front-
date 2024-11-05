import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnnonceFormComponent } from './annonce-form/annonce-form.component';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceListComponent,
    NavbarComponent,
    AnnonceFormComponent,
    AnnonceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
