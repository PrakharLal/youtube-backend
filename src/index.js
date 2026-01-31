
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
    path: '/.env' 
   })



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`SERVER STARTED AT PORT ${process.env.PORT}`);
    } )
}
)
.catch((error)=>{
    console.log("Mongodb connecton failed", error);
})


















/*
import express from 'express';
 const app =express();


(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGOB_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log("ERROR CONNECTING TO MONGODB", error); 
            throw error;
        })
        app.listen(process.env.port,()=>{
            console.log(`SERVER STARTED AT PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR CONNECTING TO MONGODB", error);
        throw error;
    }
})();  
*/