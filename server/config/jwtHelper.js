const jwt = require("jsonwebtoken");

module.exports.verifyJwtToken = (req, res, next) => {
  var token;
  if ("authorization" in req.headers) token = req.headers["authorization"];

  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });
  else {
    if (token.includes("Bearer")) {
      token = token.replace("Bearer ", "");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Token authentication failed." });
      else {
        req._id = decoded._id;
        req.role = decoded.role;
        next();
      }
    });
  }
};
