import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileDestination = "public/uploads";

        // Check if directory exists
        if (!fs.existsSync(fileDestination)) {
            fs.mkdirSync(fileDestination, { recursive: true });
        }

        cb(null, fileDestination);
    },

    filename: (req, file, cb) => {
        const filename = path.basename(
            file.originalname,
            path.extname(file.originalname)
        );

        const ext = path.extname(file.originalname);

        // Add timestamp to avoid duplicate filenames
        cb(null, `${filename}_${Date.now()}${ext}`);
    }
});

const imageFilter = (req, file, cb) => {
    const allowedExtensions = /jpg|jpeg|png|svg|jfif|gif/i;

    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.test(ext)) {
        return cb(new Error("You can upload image files only"), false);
    }

    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: imageFilter,

    limits: {
        fileSize: 2 * 1024 * 1024 // 2 MB
    }
});

export default upload;