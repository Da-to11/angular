import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Prodact } from '../Models/Prodact';


@Component({
  selector: 'app-prodact2',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './prodact2.component.html',
  styleUrl: './prodact2.component.scss'
})
export class Prodact2Component {

  constructor(private api : ApiService){

  }



  prodact2Arr : Prodact[] = []

  prodacts(){
    this.api.prodacts().subscribe((pro : any) => {
      console.log(pro)
      this.prodact2Arr = pro
    })
  }

  ngOnInit(): void{
    this.api.prodacts().subscribe((pro : any) => {
      console.log(pro)
      this.prodact2Arr = pro
    })
  }

}
