import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { AnnonceFormComponent } from './annonce-form/annonce-form.component';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';

const routes: Routes = [
  { path: 'annonces', component: AnnonceListComponent },
  { path: 'create-annonce', component: AnnonceFormComponent },
  { path: 'details/:id', component: AnnonceDetailsComponent }, // Route for details


  { path: '', redirectTo: '/annonces', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
