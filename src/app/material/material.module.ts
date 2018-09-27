import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class MaterialModule { }
