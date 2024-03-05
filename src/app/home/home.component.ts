import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  name:string="Salman"
  age:number=25


  width=400
  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt06GGDbLE0lBtFiLNBsvDaQr7HmhrzarzJu72Wx6cZfpDwXPLdgFzB0ifmg&s'

  data=''

  setData(value:string){
    console.log(value)
    this.data=value
  }


  printData(){
    console.log(this.data)
  }



  myName=''


}
