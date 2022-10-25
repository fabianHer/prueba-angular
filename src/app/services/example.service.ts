import { Injectable } from '@angular/core';
import { Example } from '../interfaces/example.interface';
import {Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ExampleService {

    constructor(){}

   

  recibirDatos(data: any): Observable<Example>{

    localStorage.setItem("datosForm", JSON.stringify(data));  

    const dataLocalStorage = JSON.parse(localStorage.getItem("datosForm") || '{}');
console.log(dataLocalStorage)
    return dataLocalStorage;

    }
}