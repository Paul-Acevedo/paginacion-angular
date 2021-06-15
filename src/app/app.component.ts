import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageSize = 5;
  i:number = 1;
  desde:number =0;
  hasta:number =5;
  items:any[] = [ {nombre:'Diego',apellido:'Moncada'},
  {nombre:'Juan',apellido:'Boliche'},
  {nombre:'Kevin',apellido:'Boliche'},
  {nombre:'pacho',apellido:'Figueroa'},
  {nombre:'Alejandra',apellido:'Garcia'},
  {nombre:'Sebasthian',apellido:'funez'},
  {nombre:'Axel',apellido:'Diaz'},
  {nombre:'Carolina',apellido:'Bermudez'}]

  title = 'paginacion';


  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);
  }
}
