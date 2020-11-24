import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litros',
  templateUrl: './litros.component.html',
  styleUrls: ['./litros.component.css']
})
export class LitrosComponent implements OnInit {

  litros: number;  
  distancia: number;  
  kml : number;  

  constructor() { 
  }

  ngOnInit(): void {
  }

  calcular(){
      this.kml = this.distancia / this.litros;  
  }

}
