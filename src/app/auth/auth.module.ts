import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const router: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
