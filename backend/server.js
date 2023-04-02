require('dotenv').config()
const express=require('express')
const workoutRoutes=require('./routes/workouts')
const mongoose=require('mongoose')
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json())
app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{console.log('db+port')})
    })
    .catch(err=>console.log(err))

