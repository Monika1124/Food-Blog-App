const mongoose = require('mongoose');

const connectDb = async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
    })
}
module.exports = connectDb;  //exporting the function to use it in other files


// const mongoose = require('mongoose')


// const connectDB =(url) => {
// return mongoose.connect(url,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true,
// })
// }
// module.exports = connectDB