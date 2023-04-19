const admin = require("firebase-admin");

// Firebase Authentication middleware
async function Authenticate(req, res, next) {
  try {
    if (req.headers.authorization) {
      const idToken = req.headers.authorization.split(" ")[1];
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized");
  }
}

module.exports = Authenticate;
