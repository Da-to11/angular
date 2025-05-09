import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Prodact } from '../../Models/Prodact';

@Component({
  selector: 'app-product2-detals',
  imports: [RouterModule],
  templateUrl: './product2-detals.component.html',
  styleUrl: './product2-detals.component.scss'
})
export class Product2DetalsComponent {

  constructor(private rout : ActivatedRoute, private api : ApiService){
    this.rout.params.subscribe(prod => {
      console.log(prod['id'])
      this.proId = prod['id']
    })
  }

  proId = 0

  oneProduct : Prodact = new Prodact

  ngOnInit() : void{
    this.api.getProductsId(this.proId).subscribe((produc : any) => {
      this.oneProduct = produc
    })
  }
}
