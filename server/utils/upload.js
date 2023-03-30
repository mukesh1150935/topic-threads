import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    // url: `mongodb://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`,
    // url: process.env.DB,
    url:`mongodb+srv://mukesh_singh_09:Msr1150935@cluster0.gajprnv.mongodb.net/?retryWrites=true&w=majority`
    options: { useNewUrlParser: true },
    file: (request, file) => {
    
        const match = ["image/png", "image/jpg","image/jpeg"];
console.log(match.indexOf(file.memeType));
        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 
