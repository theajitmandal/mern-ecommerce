// import User from "../model/authModel.js";
// import Token from "../model/tokenModel.js";
// const sendEmail = require('../utils/setEmail.js');
// import crypto from "crypto";


// export const userRegister = async (req, res) => {
//     try {
//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });

//         await user.save();

//         res.status(201).json({
//             message: "User registered successfully",
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role
//             }

//         let token = new Token({
//             token: crypto.randomBytes(16).toString('hex'),
//             userId: user._id
//         })
//         token = await token.save()
//         if(!token){
//             return res.status(400).json({error: 'Something went wrong'})
//         }

//         // send Email
//         sendEmail({
//             from: 'no-reply@expresscommerce.com',
//             to: user.email,
//             subject: 'Email Verification Link',
//             text: `Hello, \n\n 
//                 Please Verify Your account by click in the link below: \n\n
//                 http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}`
//                 //http://localhost:8000/api/confirmation/tokenvalue
//         })
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// };

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