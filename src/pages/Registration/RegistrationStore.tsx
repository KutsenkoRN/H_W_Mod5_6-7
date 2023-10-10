import {
    action, makeAutoObservable,
    makeObservable,
    observable,
    runInAction,
} from "mobx";
import AuthStore from "../../stores/AuthStore";

class RegistrationStore {

    private authStore: AuthStore;

    email = '';
    password = '';
    error = '';
    isLoading = false;

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this);
    }

    changeEmail(email: string) {
        this.email = email;
        if (!!this.error) {
            this.error = '';
        }
    }

    changePassword(password: string) {
        this.password = password;
        if (!!this.error) {
            this.error = '';
        }
    }

    async registration() {
        try {
            this.isLoading = true;
           await this.authStore.registration(this.email, this.password);
           this.authStore.isLogined = true;
        }
        catch (e) {
            if (e instanceof Error) {
                this.error = e.message;
            }
        }
        this.isLoading = false;
    }
}

export default RegistrationStore;