const mongoose=require('mongoose')

const connecttodb= async ()=>{
    try{
        await mongoose.connect('mongodb+srv://mejohnybravo69:Annu1234.@cluster0.55umd.mongodb.net/')
        console.log('Connected to MongoDB');
    } catch (error){
        console.error("Failed to connect to MongoDB:", error)
        process.exit(1);  // Exit the application with an error status code. 1 signifies failure. 0 signifies success. 3 signifies command-line tool failure. 130 signifies unexpected system failure. 128 signifies signal termination. 129 signifies fatal error. 137 signifies segmentation fault. 139 signifies bus error. 141 signifies memory exhaustion. 14
    }
}

module.exports=connecttodb;
