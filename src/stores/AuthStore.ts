import { makeAutoObservable} from "mobx";
import * as authApi from "../api/modules/auth";

class AuthStore {
    token = "";
    email = "";
    isLogined = false;

    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string) {
        const result = await authApi.login({email, password});
        this.token = result.token;
        this.email = email;
        this.isLogined = true;
    }

    async registration(email: string, password: string) {
        const result = await authApi.register({email, password});
        this.token = result.token;
        this.email = email;
        this.isLogined = true;
    }

    async logout() {
        this.token = "";
        this.isLogined = false;
    }
}

export default AuthStore;