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

# Mongoose and ORMs (or ODMs)

---

# What is an ORM/ODM?

- ORM – Object Relational Mapper
    - ODM – Object Document Mapper
- O{R,D}Ms are a way of mapping data to native objects
- Typically provide some way to match schemas to data types
- Basic validation
- Abstraction over relations
- Query abstractions

---

# Why an O{R,D}M over lower level connectors/clients?

- Richer APIs
  - Rather than requiring long strings of raw objects or text, we get simplified methods
  - More typesafe(ish) functions
- Model/document validation
  - We can specify our schema upfront and validate in software
  - Avoids pushing validation to the database and allows for app-level validation
- Better relation modeling
  - Instead of complex queries, simple methods that abstract over them
  - More explicit way to write up object/document references

---

# What is Mongoose?

- MongoDB ODM
- Has a straightforward API mostly centered around the `Model` object
- `Model`s have `Schema`s that allow for specifying data types
  - Sort of a schema without enforcing it at the database level
- Query interface that makes interacting with data simpler

---

# How do I use it?

```shell
npm install mongoose
```

```javascript
import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/dbname');

const Posts = mongoose.model('posts', {
  _id: mongoose.SchemaTypes.String,
  title: mongoose.SchemaTypes.String,
  body: mongoose.SchemaTypes.String,
  author: mongoose.SchemaTypes.String
});

const posts = await Posts.find();
console.log(posts);
```

---

# References

- [Mongoose Quickstart](https://mongoosejs.com/docs/index.html)
- [Mongoose SchemaTypes](https://mongoosejs.com/docs/schematypes.html)
- [Model API](https://mongoosejs.com/docs/api/model.html)
