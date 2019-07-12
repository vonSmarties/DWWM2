import { Injectable } from '@angular/core';
import { Utilisateur } from '../modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  user:Utilisateur;
  connecte:boolean;
  token:string='bouya';

  constructor() {
    this.connecte = this.getConnecte();
    this.user = {
      identifiant:'',
      mdp:''
    }
  }

  envoieConne(){
    console.log("Ma conne = ", this.user);
    this.connecte = true;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }

  getConnecte():boolean{
    return eval(sessionStorage.getItem('connecte'));
  }

  disconnect(){
    this.connecte = false;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }

  toutLeMondePeutChanger(){
    console.log("Mon ID = ", this.user.identifiant);
  }

}
