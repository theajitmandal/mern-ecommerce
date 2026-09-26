import mongoose from "mongoose";
import { v1 as uuidv1 } from "uuid";
import crypto from "crypto";

const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },

        hashed_password: {
            type: String,
            required: true
        },

        salt: {
            type: String,
            required: true
        },

        role: {
            type: Number,
            default: 0
        },

        isVerified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

// Virtual password field
authSchema
    .virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

// Encrypt password
authSchema.methods.encryptPassword = function (password) {
    if (!password) return "";

    try {
        return crypto
            .createHmac("sha1", this.salt)
            .update(password)
            .digest("hex");
    } catch (error) {
        return "";
    }
};

// Authenticate password
authSchema.methods.authenticate = function (password) {
    return this.encryptPassword(password) === this.hashed_password;
};

const User = mongoose.model("User", authSchema);

export default User;