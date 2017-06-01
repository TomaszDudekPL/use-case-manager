
const fakeAuth = {
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 300); // fake async
  },
  isAuthenticated: false,
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 300);
  }
};

export default fakeAuth;



