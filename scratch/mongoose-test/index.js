import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/scratch');

// Example of embedding documents using Mongoose
const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

const Store = mongoose.model('stores', {
  _id: Number,
  name: String,
  products: [ItemSchema],
});

// const store = await new Store({ _id: 1, name: 'Target', products: [] }).save();
let store = await Store.findById(1);
await store.updateOne({ $push: { products: { name: 'Widget', quantity: 15 }}});
store = await Store.findById(1);
console.log(store);

// Useful for related data, so one-to-many or many-to-many relations
// const Store = mongoose.model('Store', {
//   name: String,
//   products: [{
//     ref: 'Product',
//     type: mongoose.Types.ObjectId,
//   }],
// });

// const Product = mongoose.model('Product', {
//   name: String,
//   quantity: Number,
// });

// const product1 = await new Product({
//   name: 'widget',
//   quantity: 10,
// }).save();

// const product2 = await new Product({
//   name: 'widget two',
//   quantity: 8,
// }).save();

// const store = await new Store({ name: 'Target', products: [product1, product2] }).save();

// const stores = await Store.findOne({ _id: store._id }).populate('products');

// console.log(stores);
