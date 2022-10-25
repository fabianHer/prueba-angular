import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent {
  message: string = "";
  titulo: string = '';
  cancelButtonText = "Cerrar"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      this.titulo = data.titulo || this.titulo;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    //this.dialogRef.updateSize('30vw','30vw')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}