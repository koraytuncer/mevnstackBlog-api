const getIndexPage = (req, res) => {
  res.send("Koray");
};

const getLoginPage = (req, res) => {
  res.send("Login");
};

export { getIndexPage, getLoginPage };
