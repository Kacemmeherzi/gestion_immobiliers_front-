import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';

const routes: Routes = [
  { path: 'annonces', component: AnnonceListComponent },
  { path: '', redirectTo: '/annonces', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
