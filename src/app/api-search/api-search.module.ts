import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatListModule, MatPaginatorModule } from '@angular/material';

import { ApiSearchPageComponent } from './api-search-page/api-search-page.component';

@NgModule({
  declarations: [
    ApiSearchPageComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ApiSearchPageComponent
  ]
})
export class ApiSearchModule {}
