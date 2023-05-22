import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges/badges.component';
import { ValidatorErrorsComponent } from './validator-errors/validator-errors.component';
import { LabeledInputDirective } from './directives/labed-input.directive';
import { AutoFocusInputDirective } from './directives/auto-focus-input.directive';

@NgModule({
  declarations: [
    BadgesComponent,
    ValidatorErrorsComponent,
    LabeledInputDirective,
    AutoFocusInputDirective,
  ],
  imports: [
    CommonModule,
 ],
 exports:[
  BadgesComponent,
  ValidatorErrorsComponent,
  LabeledInputDirective,
  AutoFocusInputDirective,
 ]


})
export class MjydhModule { }
