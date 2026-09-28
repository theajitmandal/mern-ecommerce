import User from "../model/authModel.js";
import Token from "../model/tokenModel.js";
import sendEmail from "../utils/setEmail.js";
import crypto from "crypto";

export const userRegister = async (req, res) => {
    try {
        // Create user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();

        // Create verification token
        let token = new Token({
            token: crypto.randomBytes(16).toString("hex"),
            userId: user._id
        });

        token = await token.save();

        if (!token) {
            return res.status(400).json({
                error: "Something went wrong"
            });
        }

        // Send verification email
        await sendEmail({
            from: "no-reply@expresscommerce.com",
            to: user.email,
            subject: "Email Verification Link",
            text: `Hello ${user.name},

Please verify your account by clicking the link below:

http://${req.headers.host}/api/confirmation/${token.token}

Thank you.`
        });

        // Send response
        res.status(201).json({
            message: "User registered successfully. Please verify your email.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// confirming email
export const postEmailConfirmation = async (req, res) => {
    // at first find the valid or matching token
    Token.findOne({ token: req.params.token }, (error, token) => {
        if (error || !token) {
            return res.status(400).json({ error: 'invalid token or token may have expired' })
        }
        // if we found the valid token then find the valid user
        User.findOne({ _id: token.userId }, (error, user) => {
            if (error || !user) {
                return res.status(400).json({ error: 'We are unable to find the valid user for this token' })
            }
            // check if user is already verified or not
            if (user.isVerified) {
                return res.status(400).json({ error: 'Email is already verified, login to continue' })
            }
            // save the verified user
            user.isVerified = true
            user.save((error))

        })
    })
}