import { Injectable } from '@angular/core';
import { Actu } from '../modele/actu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActuService {

  listeActu:Actu[];

  constructor(private http:HttpClient) {
    this.listeActu=[];
    this.getActu();
  }

  getActu(){
    this.http.get<Actu[]>('assets/data/listeActu.json').subscribe(
      (data) => {
        console.log(data);
        this.listeActu=data;
      }
    );
  }
}
