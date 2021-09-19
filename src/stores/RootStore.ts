import { RouterStore } from "mobx-react-router";
import LoginStore from "./rooted/LoginStore";

class RootStore {
  routing: RouterStore;
  loginStore: LoginStore;

  constructor() {
    this.routing = new RouterStore();
    this.loginStore = new LoginStore(this);
  }
}

export default RootStore;
