import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.component.html',
  styleUrls: ['./annonce-details.component.css'],
})
export class AnnonceDetailsComponent implements OnInit {
  annonce!: Annonce;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService // Service to fetch annonce details
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadAnnonces(id);
  }
  loadAnnonces(id) {
    this.annonceService.getAnnonces().subscribe(
      (data: Annonce[]) => {
        this.annonce = data.find((a) => a.id == id)!;
        console.log('Données des annonces reçues:', data); // Afficher les données dans la console
      },
      (error) => {
        console.error('Erreur lors du chargement des annonces', error);
      }
    );
  }
}
