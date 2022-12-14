import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {
    /**
     *
     */
    constructor(
    private _http: HttpClient
    ) {
    }

    r = new BehaviorSubject('');
    get role() {
      return this.r.value;
    }
    set role(v) {
      this.r.next(v);
    }
    getRole() {
      return this._http.get(environment.API_ENDPOINT + '/v1/user/getRole');
    }

    get(id) {
      return this._http.get(environment.API_ENDPOINT + '/v1/user/' + id);
    }

    create(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/user', payload);
    }

    register(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/createBuyer', payload);
    }

    update(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/user/update', payload);

    }
    list(payload) {
      return this._http.post(environment.API_ENDPOINT + '/v1/user/list', payload);
    }

    delete(id) {
      return this._http.delete(environment.API_ENDPOINT + '/v1/user/' + id);
    }

    me() {
      return this._http.get(environment.API_ENDPOINT + '/v1/user');
    }

    getShopInfo(id) {
      return this._http.get(environment.API_ENDPOINT + '/v1/user/shop/' + id);
    }
}


