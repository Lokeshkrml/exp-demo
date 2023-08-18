import express from 'express';
import { userRoutes } from './routes/user-routes.js';

const app=express();
app.use('/',userRoutes);
// app.use('/',ideRoutes);
// 404 middleware
app.use((request,response,next)=>{
    response.json({message:'Invalid Url'});
})
const server=app.listen(1234,(err)=>{
    if(err){
        console.log('err');
    }
    else{
        console.log('Server up and running');
    }

})