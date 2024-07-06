const { verifyToken } = require('../security/jwt');

module.exports.authMiddleware = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

  console.log("Token reçu:", token);

  if (!token) {
    return res.status(401).json({ message: "Authentification requise" });
  }

  try {
    const { isValid, payload } = verifyToken(token, process.env.JWT_SECRET);

    if (!isValid) {
      return res.status(403).json({ message: "Token invalide" });
    }

    req.user = { id: payload.userId };
    console.log("Utilisateur décodé:", payload);
    console.log("req.user défini:", req.user);

    next();
  } catch (error) {
    console.error("Erreur de vérification du token:", error);
    return res.status(403).json({ message: "Token invalide" });
  }
};