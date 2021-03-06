import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { Donante } from './models/donante';
import { Employee } from './models/employee';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


    constructor(public modal:NgbModal) { }
    
    
    donanteArray: Donante[] =[
      { id: 1, name: 'Cristhian Ganchala', cellphone: '0995026624', country: 'Ecuador', address: 'Ajavi'},
      { id: 2, name: 'Evelyn Guaño', cellphone: '0979106123', country: 'Ecuador', address: 'Mena2'}
    ];


 

  selectedDonante: Donante = new Donante();
  

  add(): void
{
  if(this.selectedDonante.id === 0){

    this.selectedDonante.id = this.donanteArray.length + 1;
    this.donanteArray.push(this.selectedDonante);
  }

  this.selectedDonante = new Donante();
}


  edit(donante: Donante){
    this.selectedDonante = donante;
  }

delete() {
  this.donanteArray = this.donanteArray.filter(x => x != this.selectedDonante);
  this.selectedDonante = new Donante();
}

}

