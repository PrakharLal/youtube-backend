import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';




const app=express(); 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:'16kb'})) //user se jo data aayega vo json format me hoga
app.use(express.urlencoded({ extended: true, limit: '16kb' }));//yeh url ko handle karne kuki alag format hota hai har jagah url ka  
app.use(express.static ('public')); //to serve static files like images,css files
app.use(cookieParser()); //to parse cookies from incoming requests 

export { app } 