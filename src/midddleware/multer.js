const multer =  require('multer');

const storage =multer.diskStorage({
    destination : './public/uploads',
    filename :(req,file,cb) => {
        cb(null, file.originalname);
    }
});
const maxSize = 1024*1024*2;
const fileFilter = (req,file,cb) => {
    if(!file.mimetype.includes('jpeg') && !file.mimetype.includes('png')){
        return cb(null,false);
    }
    cb(null,true);

}
 const uploads=multer ({
    storage :storage,
    limits : {filesize :maxSize},
    fileFilter: fileFilter
 })
  module.exports={uploads};