import {Injectable} from '@angular/core';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {of} from 'rxjs';


@Injectable() class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(ofType(registerAction), switchMap(({request}) => {
    return this.authService.register(request).pipe(map((currentUser: CurrentUserInterface) => {
      return registerSuccessAction({currentUser}),
        catchError(() => {
          return of(registerFailureAction());
        });

    }));
  })));

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
