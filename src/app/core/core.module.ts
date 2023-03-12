import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './service/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  SigninComponent,
  SignupComponent
];





@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
