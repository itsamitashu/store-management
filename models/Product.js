const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

productName:{
type:String,
required:true
},

productCode:{
type:String,
required:true,
unique:true
},

category:String,

supplierName:{
type:String,
required:true
},

quantity:{
type:Number,
min:0
},

reorderLevel:{
type:Number,
min:1
},

unitPrice:{
type:Number,
min:1
},

manufactureDate:Date,

productType:String,

status:{
type:String,
default:"Available"
}

});

module.exports = mongoose.model("Product",productSchema);