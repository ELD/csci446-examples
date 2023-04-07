import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/scratch');

const Store = mongoose.model('Store', {
  name: String,
  products: [{
    ref: 'Product',
    type: mongoose.Types.ObjectId,
  }],
});

const Product = mongoose.model('Product', {
  name: String,
  quantity: Number,
});

const product1 = await new Product({
  name: 'widget',
  quantity: 10,
}).save();

const product2 = await new Product({
  name: 'widget two',
  quantity: 8,
}).save();

const store = await new Store({ name: 'Target', products: [product1, product2] }).save();

const stores = await Store.findOne({ _id: store._id }).populate('products');

console.log(stores);
