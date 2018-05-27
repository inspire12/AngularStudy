import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedComponent } from './selected.component';
import {MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,

  ],
  declarations: [SelectedComponent],
  exports: [SelectedComponent]
})
export class SelectedModule { }
