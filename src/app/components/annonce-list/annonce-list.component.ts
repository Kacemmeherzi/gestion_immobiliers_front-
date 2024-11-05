import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce.model';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {

  annonces: Annonce[] = [];
  newAnnonce: Annonce = {
    titre: '',
    localisation: '',
    category: '',
    price: '',
    description: '',
    nombre_de_chambres: '',
    surface: ''
  };

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.loadAnnonces();
  }

  loadAnnonces() {
    this.annonceService.getAnnonces().subscribe(
      (data: Annonce[]) => {
        this.annonces = data;
        console.log('Données des annonces reçues:', data)  // Afficher les données dans la console
      },
      (error) => {
        console.error('Erreur lors du chargement des annonces', error);
      }
    );
  }

  createAnnonce() {
    this.newAnnonce.date = new Date().toISOString();  // Génère la date actuelle
    this.annonceService.createAnnonce(this.newAnnonce).subscribe(
      (response) => {
        console.log('Annonce créée avec succès:', response);  // Afficher la réponse du serveur
        this.loadAnnonces();  // Recharge la liste après création
      },
      (error) => {
        console.error('Erreur lors de la création de l\'annonce', error);
      }
    );
  }
}
