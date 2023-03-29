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

# CSCI446 – Connecting MongoDB to Express

<!--
1. Review thus far
1. MongoDB package/client
1. Breaking down the connection URI
1. The connection function we used in class on Monday
1. Creating a `util.js` file
1. Using `Application.{get, set}` in Express
1. Connection pooling and why we can assign one connected client
1. Pitfalls
  - Glued to one database
1. Extension options
-->

---

# MongoDB Node Connector

- MongoDB publishes a basic driver for Node runtimes[^1]
  - This is what we'll be using
- API very similar to what we've seen in the Mongo shell (`mongosh`)
- Installation:
  ```
  $ npm add mongodb
  ```

[^1]: [MongoDB package on NPM](https://www.npmjs.com/package/mongodb)

---

# Connecting to MongoDB

- We use the `MongoClient` class to instantiate a connection
- Takes a connection URI string, format:
  - Specifically: `mongodb://localhost:27017`

```javascript{1|3|4|3-8|all}
import { MongoClient } from 'mongodb';

async function connect() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();

  return client;
}
```

---

# Aside: Breaking down the connection URI
- The URI has six parts:
  - scheme
  - username
  - password
  - host
  - database
  - options
- Example: `{scheme}://{username}:{password}@{host}/{database}?{options}`

---

# Reusing the connection

- By default, `MongoClient` pools connections
  - This means we have multiple connections open to the database that we can borrow and use
  - Having a pool of connections allows us to not have to open a new connection on every request
- We can configure the pool size using a second options argument[^1]:
  - `maxPoolSize` sets the maximum number of connections that can be opened, defaults to 100
  - `minPoolSize` sets the minimum number, defaults to 0
- As we use the database, it'll open new connections up to the max

[^1]: [MongoClientOptions docs](https://mongodb.github.io/node-mongodb-native/5.1/interfaces/MongoClientOptions.html)

---

# Extending our connection function

- We can extend the function to take a database name or automatically set the collection

```javascript{6|all}
// Setting the database by default
async function connect(databaseName) {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();

  return client.db(databaseName);
}
```

```javascript{6|all}
// Setting the database and collection by default
async function connect(databaseName, collectionName) {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();

  return client.db(databaseName).collection(collectionName);
}
```

---

# Using `Application.{set, get}` in Express

- Express has a way of setting properties globally on the application
  - `Application.set()` and `Application.get()`
  - `set(name, value)` takes a key and value
  ` get(name)` returns the value with given key
- We can store objects of all kinds using this scheme
- To retrieve, we get the `app` reference through the `request` argument

```javascript{2|4|all}
app.get('/', async (req, res) => {
  const db = req.app.get('mongoDatabase');

  const allWidgets = await db.collection('widgets').find().toArray();

  return res.json(allWidgets);
});
```
