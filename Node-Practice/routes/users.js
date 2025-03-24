var express = require("express");
var router = express.Router();
var db = require("../db");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var udate = await db.query("select user_name, first_name, id from users");

  res.send(udate.rows);
});

//Respond to a PUT request to the /user route:
router.put("/user", async (req, res) => {
  console.log(req.query.id);
  console.log(req.body.user_name);
  if (req.body.user_name) {
    var udate = await db.query(
      `update users set user_name = '${req.body.user_name}' where id = ${req.query.id}`,
    );
  }
  if (req.body.first_name) {
    var udate = await db.query(
      `update users set first_name = '${req.body.first_name}' where id = ${req.query.id}`,
    );
  }

  res.send("Got a PUT request at /user");
});

//Respond to a DELETE request to the /user route:
router.delete("/user", async (req, res) => {
  console.log(req.body);
  var udate = await db.query(
    `delete from users where user_name = '${req.body.user_name}'`,
  );
  res.send("Got a DELETE request at /user");
});

router.post("/user", async (req, res) => {
  var udate = await db.query(
    `insert into users (user_name, first_name) values ('${req.body.user_name}', '${req.body.first_name}')`,
  );

  res.send("Got a POST request at /user");
});

const app = express();
const port = 3002;

app.use(express.json()); // Middleware to parse JSON request bodies

// GET all pizzas
app.get("/orders/pizza-status?id=<my-pizza-id", (req, res) => {
  res.json({ message: "Here are all the pizzas!" });
});

// GET a specific pizza by ID
app.get("/orders/pizza_id", (req, res) => {
  const pizzaId = req.params.id;
  res.json({ message: `Here is pizza with ID: ${pizza_id}` });
});

// POST a new pizza order
app.post("/orders/pizza", (req, res) => {
  const newPizza = req.body;
  res.json({ message: "New pizza order created!", pizza: newPizza });
});

// PUT update an existing pizza order
app.put("/orders/pizza_id", (req, res) => {
  const pizzaId = req.params.id;
  const updatedPizza = req.body;
  res.json({
    message: `Pizza with ID: ${pizza_Id} updated!`,
    pizza: updatedPizza,
  });
});

// DELETE a pizza order
app.delete("/orders/pizza_id", (req, res) => {
  const pizzaId = req.params.id;
  res.json({ message: `Pizza with ID: ${pizza_Id} deleted!` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = router;

