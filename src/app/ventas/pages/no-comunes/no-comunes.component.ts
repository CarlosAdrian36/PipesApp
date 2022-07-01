import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  
})
export class NoComunesComponent   {
  //i18nSelect
  nombre: string = 'fernando';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string [] = ['Maria', 'Juan','Pedro','Hernando', 'Eduardo', 'Fernando'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2':  'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'juana';
    this.genero = 'femenino';
  }

  borrarcliente(){
    this.clientes.pop();
  }

  //keyvalue pipe

  persona = {
    nombre: 'Carlos',
    edad:35,
    direccion: 'ottawa Canada'
  }

  //JSON piep
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquamnan',
      vuela: false
    },
  ]
//Async Pipe

miObservable = interval(5000)

valorPromesa = new Promise((resolve,reject)=>{
  setTimeout(()=> {
    resolve('Tenemos data de la promesa')
  },3500)
})

}
