import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


export const connect = ()=>{

    let mongo_url = 'mongodb://127.0.0.1:27017/todoapp';

    mongoose.connect(mongo_url, {useNewUrlParser : true});

    mongoose.connection.on('connected', ()=>{
        console.log('Database Connected')
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database Disconnected')
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting database', error.message)
    })
}