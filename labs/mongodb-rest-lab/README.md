# MongoDB, Express REST API Lab

For this lab, we're going to kick the tires of the ExpressJS
and MongoDB software stack. We've seen examples of how to wire
up these technologies together in class, but now it's time to
experiment with it on our own to get comfortable before we begin
the next assignment.

## Objectives

- Gain hands-on familiarity with using MongoDB
- Gain hands-on familiarity with structuring ExpressJS
  route handlers to handle various HTTP methods
- Understand how REST APIs communicate data to API consumers

## Getting Started

1. Clone the CSCI446 repo (this repo) to your local machine
   - If you've already cloned it, pull for the latest code
1. Copy the `starters/mongodb-express` directory
1. Run `npm install` on the copied directory
1. Investigate the directory structure and files

## Exercises

### 1. Seed the database

I'll give this one for free. We need to seed our MongoDB database with some
data so we can get started. The code snippet below will create two class documents
and ten student documents. The third collection will just be a simple many-to-many
mapping of students to classes.

```bash
$ mongosh
$ test> use mongodb_lab
```

```javascript
db.classes.insertMany([
  {
    _id: 1,
    name: "Web Applications",
    number: "446",
    department: "cs",
  },
  {
    _id: 2,
    name: "Intro to DevOps",
    number: "498",
    department: "cs",
  },
]);

db.students.insertMany([
  {
    _id: 1,
    name: "Sarah Powlowski",
  },
  {
    _id: 2,
    name: "Danny Bruen",
  },
  {
    _id: 3,
    name: "Edna Hettinger",
  },
  {
    _id: 4,
    name: "Lucas Marquardt PhD",
  },
  {
    _id: 5,
    name: "Miss Judy Gerhold",
  },
  {
    _id: 6,
    name: "Pearl Effertz",
  },
  {
    _id: 7,
    name: "Johnny Rutherford",
  },
  {
    _id: 8,
    name: "Alfred Mills",
  },
  {
    _id: 9,
    name: "Barry Goyette",
  },
  {
    _id: 10,
    name: "Victoria Lemke",
  },
]);

db.classes_students.insertMany([
  { _id: 1, class_id: 1, student_id: 1 },
  { _id: 2, class_id: 1, student_id: 2 },
  { _id: 3, class_id: 1, student_id: 5 },
  { _id: 4, class_id: 1, student_id: 7 },
  { _id: 5, class_id: 1, student_id: 9 },
  { _id: 6, class_id: 1, student_id: 10 },
  { _id: 7, class_id: 2, student_id: 1 },
  { _id: 8, class_id: 2, student_id: 3 },
  { _id: 9, class_id: 2, student_id: 4 },
  { _id: 10, class_id: 2, student_id: 6 },
  { _id: 11, class_id: 2, student_id: 8 },
  { _id: 12, class_id: 2, student_id: 10 },
]);
```

### 2. Familiarize yourself with the starter code

Take a look at the starter code. In particular, look at the `lib/db.js` file
and see how we're connecting to the database. The `mongodb://` url might be
different for you depending on how you installed MongoDB on your computer. If
something isn't working correctly, please ask for help and we'll figure it out.

Notably in `lib/db.js`, you'll notice the default exported function is:

1. async
1. Returns a function
1. Initiaties a new connection

There are better ways to initiate database connections, but this works for us, for now.

If you look at `app.js`, you'll see that we're setting the function on the app object so
we can fetch it out of route handlers later on.

_Note: Make sure you run `npm install` before attempting to run the app_

### 3. Create a set of route handlers to retrieve and modify classes

We want to start building a REST API. Let's start with just classes. You'll want
to create a new file under the `routes` directory in your project. Name it `classes.js`
or something similar.

We want to create the following routes:

| Route URL  | HTTP method | Description                | Express handler function stub                            |
| ---------- | ----------- | -------------------------- | -------------------------------------------------------- |
| /          | GET         | Fetches all classes        | `Router.get("/", async function (req, res) {})`          |
| /:class_id | GET         | Fetches a particular class | `Router.get("/:class_id", async function (req, res) {})` |
| /          | POST        | Create a new class         | `Router.post("/", async function (req, res) {})`         |
| /:class_id | PUT         | Update a particular class  | `Router.put("/", async function (req, res) {})`          |
| /:class_id | DELETE      | Delete a particular class  | `Router.delete("/", async function (req, res) {})`       |
| /:class_id | PATCH       | Patch a class              | `Router.patch("/", async function (req, res) {})`        |

_Note: PATCH can be tricky to implement, so for the purposes of this lab, consider this a stretch goal/bonus goal_

Refer to the MongoDB example from class in the `examples/rest-with-mongodb` folder
for help getting started. The `widgets` handler has several of these implemented for that example.

### 4. Create a set of route handlers to retrieve students

Let's repeat what we just did but for students instead.

You may notice that the code is very similar as we're making naive assumptions
that we don't need to validate the data coming in. For our purposes, that's okay.

There's a lot of boilerplate code for making it easy to expose HTTP resources, but
it's useful to get more experience building the boilerplate.

### 5. Create the nested resource to retrieve all the students in a class

_This is a stretch goal!_

We may end up doing this as as class, but let's create a nested resource, so we
can retrieve the students in a particular class. Our URL scheme will look like this:

`/classes/:class_id/students`

And we'll get back an array of objects that are the students in the class:

```json
{
    _id: 1,
    name: "CSCI446",
    students: [
        { _id: 1, name: "Sarah Powlowski", ... },
        ...
    ]
}
```

**You can see a possible solution here: [`classes.js`](https://github.com/ELD/csci446-examples/blob/main/labs/mongodb-rest-lab/mongodb-lab-solution/routes/classes.js#L50-L63)**

## Resources

- [MongoDB Tutorial](https://www.mongodbtutorial.org)
- [MongoDB CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
- [Nested Resources in Express](https://thewebdev.info/2022/02/27/how-to-add-rest-endpoints-with-express-js-nested-router/)
- [MongoDB $lookup aggregation](https://www.mongodb.com/docs/v5.0/reference/operator/aggregation/lookup/)
