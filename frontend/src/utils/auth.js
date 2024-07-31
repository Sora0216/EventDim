import jwtDecode from 'jwt-decode';

class AuthService {
    getToken() {
      return localStorage.getItem('id_token');
    }
  
    login(token) {
      localStorage.setItem('id_token', token);
      window.location.assign('/');
    }
  
    logout() {
      localStorage.removeItem('id_token');
      window.location.assign('/login');
    }

    loggedIn() {
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
      try {
        const decode = decode(token);
        return decoded.exp < Date.now() / 1000;
      } catch (err) {
        return false;
      }
    }
  }
  
  export default new AuthService();
  