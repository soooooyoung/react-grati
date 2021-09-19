import { action, computed, observable } from "mobx";
import RootedStore from "./RootedStore";

export default class LoginStore extends RootedStore {
  @observable private _loading = false;
  @observable private _loginStatus = false;
  @observable private _loginId?: string = localStorage.getItem(
    "loginId"
  ) as string;

  @action.bound
  login(username: string, password: string) {
    this._loading = true;

    try {
    } catch (e) {
      alert("Check Your Username or Password");
    } finally {
      this._loading = false;
    }
    this._loginStatus = true;
  }

  @computed
  get loginStatus() {
    return this._loginStatus;
  }

  @computed
  get loginId() {
    return this._loginId;
  }

  @computed
  get loading() {
    return this._loading;
  }
}
