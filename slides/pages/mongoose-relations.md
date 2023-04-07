---
# try also 'default' to start simple
theme: seriph
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## CSCI446 March 29 2023 lecture

  Learning how to wire up MongoDB to Express
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# MongoDB relations in Mongoose

---

# Relations recap

- One-to-One & One-to-Many
    - Embedded denormalized representation
    - Related on foreign data (think foreign key)
- Many-to-Many
    - Related on foreign data (think foreign key)

---

```json
// Store
{
    _id: ObjectId("..."),
    name: "Target",
    // ...
}
// Product
{
    _id: ObjectId("..."),
    name: "Thing",
    store_id: ObjectId("..."),
    // ...
}
```

```javascript
db.stores.aggregate({
    $lookup: {
        from: items,
        localField: "_id",
        foreignField: "store_id",
        as: "products",
    }
})
```

---

# Wiring up relations in Mongoose

- Through Mongoose's `Schema` object, we can wire up relations
- If we're embedding documents, we just embed the sub-schema
    - When querying the object, we get back the embedded documents contained within
- If we're referencing other documents, it's a little more complex
    - Sub-object specifying the type and the field we're referencing
    - When querying, we need to `populate()` the reference object

---

# Embedded Example

```javascript
const Store = mongoose.model('Store', {
    name: String,
    products: [Product],
});

const Product = mongoose.model('Product', {
    name: String,
    quantity: Number,
});

const stores = await Store.find();
console.log(stores.products);
```

---

# Referencing Example

```javascript
const Store = mongoose.model('Store', {
    name: String,
    products: [{
        type: ObjectId,
        ref: 'Product',
    }],
});

const Product = mongoose.model('Product', {
    name: String,
    quantity: Number,
});

const stores = await Store.find().populate('Product');
console.log(stores.products);
```

---

# Resources

- [Mongoose Relation Tutorial](https://vegibit.com/mongoose-relationships-tutorial/)
