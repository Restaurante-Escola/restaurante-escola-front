import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaSelectComponent } from './components/turma-select/turma-select.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  TurmaSelectComponent,
]

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
		FormsModule,
  ],
  exports: [ ...components ],
})
export class SharedModule { }
