class Auth {
    constructor() {
        this.authenticated = true //Change me to false so the authentication works
    }

    login(cb) {
        this.authenticated = true
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()