const jwt = require("jsonwebtoken");

const createToken = async (userName) => {
  const token = await jwt.sign({ userName: userName }, "shruti@jwtkey");
  return token;
};

module.exports = createToken;
