import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule,MatTableModule,MatInputModule, MatSortModule, MatPaginatorModule, MatIconModule, MatTooltipModule, MatCardModule, MatSlideToggleModule, MatListModule, MatMenuModule, MatBadgeModule, MatSpinner, MatProgressSpinnerModule, MatCheckbox, MatCheckboxModule, MatDialogModule, MatTreeModule} from '@angular/material'
import {MatFormFieldModule} from '@angular/material/form-field';




const MaterialComponents = [
  MatTreeModule,
  MatDialogModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
