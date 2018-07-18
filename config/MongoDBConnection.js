'use strict';
const mongoose=require("mongoose");

class MongoDBConnection{
    connect(username,password,host,db_name){
        mongoose.connect("mongodb://"+username+":"+password+"@"+host+"/"+db_name+"",{ useNewUrlParser: true });
        mongoose.connection.on("open",()=>{
            console.log("MongoDB: Connected");
        });

        mongoose.connection.on("error",function(err){
            console.log("MongoDB: Error\n"+err);
        });
    }
}

module.exports=new MongoDBConnection();