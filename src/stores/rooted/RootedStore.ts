import { RootStore } from "../../stores";

class RootedStore {
  public rootStore: RootStore;

  constructor(public root: RootStore) {
    this.rootStore = root;
  }
}

export default RootedStore;
