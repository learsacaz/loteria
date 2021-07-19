import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent  {
  valor1: number;
  valor2: number;
  valor3: number;
  valor4: number;
  valor5: number;
  suma:number = 0;
  mensaje:string = "";
  numeroGanador: string;
  constructor() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.valor3 = 0;
    this.valor4 = 0;
    this.valor5 = 0;
    this.numeroGanador="";
  }
  
  obtenerNumero(){
    let numero : number;
    numero = (Math.trunc(Math.random() * 9)-1) + (1);
    if (numero < 0 ) numero=0;
    return numero;
  }

  jugar():void{
    this.valor1 = this.obtenerNumero();
    this.valor2 = this.obtenerNumero();
    this.valor3 = this.obtenerNumero();
    this.valor4 = this.obtenerNumero();
    this.valor5 = this.obtenerNumero();
    this.numeroGanador = `El número ganador es: ${this.valor1} ${this.valor2} ${this.valor3} ${this.valor4} ${this.valor5}`
  }

  llamarParImpar(mensaje:string){
    this.suma = this.valor1 + this.valor2 + this.valor3 + this.valor4 +this.valor5
    this.mensaje = "Padre: " + mensaje
  }
}
