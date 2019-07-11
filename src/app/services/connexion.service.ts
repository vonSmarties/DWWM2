import { Injectable } from '@angular/core';
import { Utilisateur } from '../modele/utilisateur';
import { EditionGuard } from '../edition.guard';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  user:Utilisateur;
  connecte:boolean;

  constructor(public complot:EditionGuard) {
    this.connecte = this.getConnecte();
    this.user = {
      identifiant:'',
      mdp:''
    }
  }

  envoieConne(){
    console.log("Ma conne = ", this.user);
    this.connecte = true;
    this.complot.jambon=true;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }

  getConnecte():boolean{
    return eval(sessionStorage.getItem('connecte'));
  }

  disconnect(){
    this.connecte = false;
    this.complot.jambon=false;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }

  toutLeMondePeutChanger(){
    console.log("Mon ID = ", this.user.identifiant);
  }

}
