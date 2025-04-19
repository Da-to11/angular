import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  textArr : string[] = []

  text = ""


  add(){
    this.textArr.push(this.text)
    this.text = ""
  }


  show(){
    for(let el of this.textArr){
      console.log(el)
    }
  }

}
