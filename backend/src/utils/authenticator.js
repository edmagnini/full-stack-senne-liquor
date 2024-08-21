const { sign, verify } = require("jsonwebtoken");

class Authenticator {
    generateToken(payload, expiresIn) {
        const  id  = payload;
        const token = sign(
            { id: id },
            process.env.JWT_KEY,
            { expiresIn: expiresIn || process.env.JWT_EXPIRES_IN } // support custom expiration times
        );
        return token;
    }

    getTokenData(token) {
        try {
            const tokenData = verify(token, process.env.JWT_KEY);
            return { id: tokenData.id };
        } catch (error) {
            return null;
        }
    }
}

module.exports = Authenticator;
