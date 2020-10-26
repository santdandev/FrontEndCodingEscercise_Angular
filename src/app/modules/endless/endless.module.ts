import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlessComponent } from './components/endless/endless.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EndlessComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EndlessComponent
  ]
})
export class EndlessModule { }
