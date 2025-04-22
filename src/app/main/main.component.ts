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



  name = ""
  age = ""
  grade = ""
  subjects = ""
  street = ""
  city = ""
  zip = ""

  userArry : any[] = []



  addButton(){

    this.userArry.push({
      name1: this.name,
      Age: this.age,
      Grade: this.grade,
      Subject: this.subjects,

      Addres:{
        Street: this.street,
        City: this.city,
        Zip: this.zip
      }
    })

    this.name = ""
    this.age = ""
    this.grade = ""
    this.subjects = ""
    this.street = ""
    this.city = ""
    this.zip = ""

    console.log(this.userArry)
  
  }

  showli = "SHOW"
  showlist = false

  showBitton(){
    this.showli == "SHOW" ? this.showli = "HIDE" : this.showli = "SHOW"
    this.showlist == false ? this.showlist = true : this.showlist = false
  }
}
