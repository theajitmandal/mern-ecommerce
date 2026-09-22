const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileDestination = 'public/uploads'
        // check if directory exists
        if(!fs.existsSync(fileDestination)){
            fs.mkdirSync(fileDestination, {recursive: true}) 
            // recursive: true  creates parents folder as well as sub-folder
            cb(null, fileDestination)
        }
        else{
            cb(null, fileDestination)
        }
    }

})