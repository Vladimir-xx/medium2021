import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducer';
import {AuthService} from './services/auth.service';

const router: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer)
  ]
})
export class AuthModule {
}
