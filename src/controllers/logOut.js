const logOut = (req, res) => {
  res.clearCookie('RememberMe');
  res.redirect(302, '/');
};

module.exports = logOut;
