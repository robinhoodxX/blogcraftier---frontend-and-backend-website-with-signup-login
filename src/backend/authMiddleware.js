import jwt from "jsonwebtoken";
const JWT_SECRET = "your_secret_key_here";

// * ADDED: Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user info
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
