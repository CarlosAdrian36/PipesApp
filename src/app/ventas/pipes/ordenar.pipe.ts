import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroe: Heroe[],orderPor: string = 'sin valor'): Heroe[] {
    switch(orderPor){
      case 'nombre':
        return heroe.sort((a,b)=> ( a.nombre > b.nombre )? 1 : -1 );

      case 'Vuela':
        return heroe.sort((a,b)=> ( a.vuela > b.vuela )? 1 : -1 );
      
      case 'color':
        return heroe.sort((a,b)=> ( a.color > b.color )? 1 : -1 );
      
      
      default:
        return heroe;
    }
    // if (orderPor === 'sin valor') {
    //   return heroe;
    // }else{
    //   heroe = heroe.sort((a,b)=> ( a.nombre > b.nombre )? 1 : -1 );
    // }

    // return heroe;
  }

}
