const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileDestination = 'public/uploads'
        // check if directory exists
        if (!fs.existsSync(fileDestination)) {
            fs.mkdirSync(fileDestination, { recursive: true })
            // recursive: true  creates parents folder as well as sub-folder
            cb(null, fileDestination)
        }
        else {
            cb(null, fileDestination)
        }
    },
    filename: (req, file, cb) => {
        let filename = path.basename(file.originalname, path.extname(file.originalname))
        // abc.jpg
        // .jpg
        // path.basename(abc.jpg, .jpg)
        // filename will be equal to 'abc'

        let ext = path.extname(file.originalname)
        // .jpg
        // file names can be same so changing the original filename
        cb(null, filename + '_' + Date.now() + ext)
    }
})

let imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|png|jpeg|svg|jfif|gif||JPG|PNG|JPEG|SVG|JFIF|GIF$)/)) {
        return cb(new Error('You can upload image file only'), false)
    } else {
        cb(null, true)
    }
}