import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedComponent } from './selected.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectedComponent],
  exports: [SelectedComponent]
})
export class SelectedModule { }
