import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/register-request';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthResponceInterface} from '../types/auth-responce';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponceInterface>(url, data).pipe(map((response: AuthResponceInterface) => response.user));
  }
}
