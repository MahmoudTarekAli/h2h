import {Action, Selector, State, StateContext, Store} from '@ngxs/store'
import {Injectable} from '@angular/core'
import {AuthService} from '../services/auth.service'

import {NzNotificationService} from 'ng-zorro-antd/notification'
import {Router} from "@angular/router";
import {User} from "../models/user";
import {TranslateService} from "@ngx-translate/core";


export class UserStateModel {
  user: User | null;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
  },
})

@Injectable({providedIn: 'root'})
export class AuthenticationState {

  constructor(private authService: AuthService, private notify: NzNotificationService, private translate: TranslateService,
              private store: Store, private router: Router) {
  }

  @Selector()
  static getUser(state: UserStateModel) {
    return state.user
  }

  //to be implemented...
}




