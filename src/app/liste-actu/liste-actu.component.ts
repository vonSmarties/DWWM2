import { Component, OnInit } from '@angular/core';
import { ActuService } from '../services/actu.service';

@Component({
  selector: 'app-liste-actu',
  templateUrl: './liste-actu.component.html',
  styleUrls: ['./liste-actu.component.css']
})
export class ListeActuComponent implements OnInit {

  // debut:number=0;
  // ecart:number=3;
  filter:string;

  constructor(public adrien:ActuService) { }

  ngOnInit() {
    this.filter='';
  }

  // movePage(n) {
  //   this.debut+=n;
  //   console.log(this.debut);
  // }

}
