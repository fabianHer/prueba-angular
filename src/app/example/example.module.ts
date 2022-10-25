import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { ExampleRoutingModule } from "./example.routing";
import { ExampleComponent } from "./example/example.component";
import { AlertDialogComponent } from "./alert-dialog/alert-dialog.component";


@NgModule({
    declarations:[
        ExampleComponent,
        AlertDialogComponent
    ],
    exports: [
        ExampleComponent,
        AlertDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ExampleRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        MatDialogModule
    ]
})
   
export class ExampleModule {}