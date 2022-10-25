import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Example } from '../../interfaces/example.interface';
import { ExampleService } from 'src/app/services/example.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
 formularioExample!: FormGroup;
 submitted: boolean = false;
 mostrarEdad: boolean = false;
 datos!: any;

  constructor( private fb: FormBuilder,
               public dialog: MatDialog,
               private exampleService: ExampleService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioExample = this.fb.group({
      nombre: ['',[Validators.required , Validators.minLength(3)]],
      apellido: ['',[ Validators.minLength(3)]],
      documento: ['',[Validators.required , Validators.minLength(10)]],
      correo: ['',[Validators.required, Validators.email]],
      genero: ['',[Validators.required]],
      edad: [''],
      pasatiempo: ['',[ Validators.required]],

    })
  }
  
  public get getNombre(){
    return this.formularioExample.get('nombre');
  }
  public get getApellido(){
    return this.formularioExample.get('apellido');
  }
  public get getDocumento(){
    return this.formularioExample.get('documento');
  }
  public get getCorreo(){
    return this.formularioExample.get('correo');
  }
  public get getEdad(){
    return this.formularioExample.get('edad');
  }
  public get getPasatiempo(){
    return this.formularioExample.get('pasatiempo');
  }
  habilitarCampo(dato?: any){
   if(dato ==='masculino'){
    this.mostrarEdad = true;
    this.getEdad?.setValidators( [Validators.min(0), Validators.max(100)])
   } else {
    this.mostrarEdad = false;
    this.getEdad?.clearValidators();
    this.getEdad?.setValue('');
   }
  }
 async enviarFormulario(){

    if(this.formularioExample.invalid) return;

    this.submitted = true;

    try {
    this.datos =  await this.exampleService.recibirDatos(this.formularioExample.value);
    this.openAlertDialog();

    this.formularioExample.reset();

    } catch (error) {
      console.error(error)
    }
  }
 
  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: this.datos,
        titulo: 'Datos registrados',
        buttonText: {
          cancel: 'Cerrar'
        }
      },
    });
  }
}

