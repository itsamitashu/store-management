const Product = require("../models/Product");

// Add Product
exports.addProduct = async (req,res)=>{
try{
const product = new Product(req.body);
await product.save();
res.status(201).json(product);
}
catch(err){
res.status(500).json({message:err.message});
}
};

// Get All Products
exports.getProducts = async (req,res)=>{
try{
const products = await Product.find();
res.status(200).json(products);
}
catch(err){
res.status(500).json({message:err.message});
}
};

// Get Product by ID
exports.getProductById = async (req,res)=>{
try{
const product = await Product.findById(req.params.id);
res.status(200).json(product);
}
catch(err){
res.status(500).json({message:err.message});
}
};

// Update Product
exports.updateProduct = async (req,res)=>{
try{
const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).json(product);
}
catch(err){
res.status(500).json({message:err.message});
}
};

// Delete Product
exports.deleteProduct = async (req,res)=>{
try{
await Product.findByIdAndDelete(req.params.id);
res.status(200).json({message:"Product Deleted"});
}
catch(err){
res.status(500).json({message:err.message});
}
};