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

// Confirming email
export const postEmailConfirmation = async (req, res) => {
    try {
        // Find the verification token
        const token = await Token.findOne({
            token: req.params.token
        });

        if (!token) {
            return res.status(400).json({
                error: "Invalid token or token may have expired"
            });
        }

        // Find the user associated with the token
        const user = await User.findById(token.userId);

        if (!user) {
            return res.status(400).json({
                error: "We are unable to find the user for this token"
            });
        }

        // Check if email is already verified
        if (user.isVerified) {
            return res.status(400).json({
                error: "Email is already verified, login to continue"
            });
        }

        // Verify the user's email
        user.isVerified = true;

        await user.save();

        // Delete the used verification token
        await Token.findByIdAndDelete(token._id);

        res.status(200).json({
            message: "Congrats, your account has been verified"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// login process
import jwt from "jsonwebtoken";             // authentication
import expressJwt from "express-jwt";       // authorization

// Sign in user
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // email = req.body.email
        // password = req.body.password

        // Find user at first
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        // Check email verification
        if (!user.isVerified) {
            return res.status(403).json({
                error: "Please verify your email before signing in"
            });
        }

        // Check password
        const isValidPassword = user.authenticate(password);

        if (!isValidPassword) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        // Generate JWT token with user id and jwt secret
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // store token in the cookie
        res.cookie('myCookie', token, {expire: Date.now()+999999})

        // return user information to frontend
        // Send response
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified
            }
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};