import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActuService } from '../services/actu.service';
import { Actu } from '../modele/actu';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  actu:Actu = {
    titre:"",
    alias:"",
    description:"",
    img:""
  }

  newsId: string | number;

  constructor(private routeParams:ActivatedRoute, public actuServ:ActuService) { }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      this.newsId = +params['francois']; // (+) convertit 'id' en nombre
      console.log(this, this.newsId);
      this.actu.titre = this.actuServ.listeActu[this.newsId].titre; // Récupération de la news dans la liste des news sur le service ActuService
      this.actu.alias = this.actuServ.listeActu[this.newsId].alias;
      this.actu.description = this.actuServ.listeActu[this.newsId].description;
      this.actu.img = this.actuServ.listeActu[this.newsId].img;
      this.actu.auteur = this.actuServ.listeActu[this.newsId].auteur;
    });
  }

  save() {
    this.actuServ.listeActu[this.newsId]=this.actu;
  }

}
