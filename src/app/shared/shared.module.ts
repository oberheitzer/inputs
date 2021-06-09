import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [InputComponent, SelectComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent
  ]
})
export class SharedModule { }
