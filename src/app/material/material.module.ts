import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [],
  exports: [
    MatInputModule,
    MatButtonModule,
  ],
})
export class MaterialModule { }
