const Auth = {
    getToken: function () {
      return localStorage.getItem('id_token');
    },
  
    login: function (token) {
      localStorage.setItem('id_token', token);
      window.location.assign('/');
    },
  
    logout: function () {
      localStorage.removeItem('id_token');
      window.location.assign('/login');
    },

    loggedIn: function () {
      const token = this.getToken();
      return !!token;
    },
  };
  
  export default Auth;
  