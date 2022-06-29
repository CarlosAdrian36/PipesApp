import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string  = 'feRnAnDo heRRera';

  valor: number = 1000;


  mostrarnombre(){
    console.log(this.nombre);
  }

}
