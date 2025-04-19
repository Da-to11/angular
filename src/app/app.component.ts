import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  
  // clicker = "Click Me"
  

  // not = ""
  // cliked = "Clicked"
  // unclicked = "Unclicked"

  // fun1(){
  //   this.not == "" ? this.not = this.cliked : this.not = this.unclicked
  //   this.unclicked == "Unclicked" ? this.unclicked = this.cliked : this.unclicked = "Unclicked"

  // }


  // imgsom = "https://img.freepik.com/premium-vector/car-full-size-body-icon-broken-line_1076610-24338.jpg?semt=ais_hybrid&w=740"

  // imgsom2 = "https://static.vecteezy.com/system/resources/previews/014/487/696/non_2x/car-pictogram-minimal-line-icon-transportation-illustration-vector.jpg"

  // change(){
  //   this.imgsom == "https://img.freepik.com/premium-vector/car-full-size-body-icon-broken-line_1076610-24338.jpg?semt=ais_hybrid&w=740" ? this.imgsom = this.imgsom2 : this.imgsom = "https://img.freepik.com/premium-vector/car-full-size-body-icon-broken-line_1076610-24338.jpg?semt=ais_hybrid&w=740"
  // }


  // aler(){
  //   alert("Clicked")
  // }







  
}
