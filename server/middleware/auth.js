import jwt from "jsonwebtoken"

const auth = (req, res, next)=> {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.json({ success: false, message: "No token provided" });
    }

    // Handle "Bearer <token>" format
    const tokenParts = token.split(' ');
    const actualToken = tokenParts.length === 2 ? tokenParts[1] : token;

    try {
        jwt.verify(actualToken, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.json({ success: false, message: "Invalid token" });
    }
}

export default auth;
