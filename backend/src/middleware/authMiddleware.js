const { verifyToken } = require('../security/jwt');

module.exports.authMiddleware = (req, res, next) => {
  // Extraire le token des cookies ou des en-têtes de la requête
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

  console.log("Token reçu:", token);

  // Vérifier que le token est présent
  if (!token) {
    return res.status(401).json({ message: "Authentification requise" });
  }

  try {
    // Vérifier et décoder le token
    const { isValid, payload } = verifyToken(token, process.env.JWT_SECRET);

    if (!isValid) {
      return res.status(403).json({ message: "Token invalide" });
    }

    // Ajouter les informations de l'utilisateur à req.user
    req.user = { id: payload.userId };
    console.log("Utilisateur décodé:", payload);
    console.log("req.user défini:", req.user);

    // Passer au middleware suivant ou à la route
    next();
  } catch (error) {
    console.error("Erreur de vérification du token:", error);

    // Vérifier les types d'erreurs et renvoyer un message approprié
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: "Token expiré" });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: "Token invalide" });
    } else {
      return res.status(500).json({ message: "Erreur interne du serveur" });
    }
  }
};
