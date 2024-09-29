const mongoose=require("mongoose");
//it will load in process object
require("dotenv").config();
const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connnected Successfully"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports=connectWithDb;