const AuthenticationData = {
    _tokenLocation: "magmart-auth-token",
    _userLocation: "magmart-user",

    hasToken: function () {
        if (localStorage.hasOwnProperty(this._tokenLocation)) {
            // console.log("app has token");
            return true;
        }
        // console.log("token is null");
        return false;
    },
    setToken: function (token) {
        localStorage.setItem(this._tokenLocation, token);
    },
    getToken: function () {
        return localStorage.getItem(this._tokenLocation);
    },
    clearToken: function () {
        localStorage.removeItem(this._tokenLocation);
        // console.log("token cleared");
    },
    setUser: function (user) {
        let userString = JSON.stringify(user);
        localStorage.setItem(this._userLocation, userString);
    },
    getUser: function () {
        let userString = localStorage.getItem(this._userLocation);
        let userObject = JSON.parse(userString);
        return userObject;
    },
    clearUser: function () {
        localStorage.removeItem(this._userLocation);
    },
    hasUser: function () {
        if (localStorage.hasOwnProperty(this._userLocation)) {
            // console.log("app has token");
            return true;
        }
        // console.log("token is null");
        return false;
    },
    isAuthenticated: function () {
        if (this.hasToken()) {
            // console.log("authenticated");

            //TODO
            //API call to server to check authentication

            return true;
        }
        // console.log("not authenticated");
        return false;
    },
};

export default AuthenticationData;
