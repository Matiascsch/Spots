import { JWT_SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";

class AuthHandlers {
  static generarToken = (req, res) => {
    try {
      if (!JWT_SECRET) {
        return res.status(500).json({ error: "JWT secret not configured" });
      }

      const payload = req.body || {};
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error: "Token generation failed" });
    }
  };

  static login = (req, res) => {
    // TODO: Implement login logic
    return res.status(200).json({ message: "Login Successful!" });
  };

  static register = (req, res) => {
    // TODO: Implement registration logic
    return res.status(200).json({ message: "Register Successful!" });
  };
}

export default AuthHandlers;
