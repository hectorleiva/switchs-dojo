var express = require('express');
var router = express.Router();
var db = require("../db");


// GET Orders Listing:
router.get("/", async function (req, res, next) {
  var udate = await db.query("user_id, method, food_time, store_number, pizza_id");

  res.send(udate.rows);
});

//Respond to a PUT request to the /order route:
router.put("/order", async (req, res) => {
  console.log(req.user_id);
  console.log(req.method);
  console.log(req.food_time);
  console.log(req.store_number);
  console.log(req.pizza_id);
  if (req.method) {
    var udate = await db.query(
      `update orders set method = '${req.method}' where id = ${req.user_id}`,
    );
  }
  if (req.food_time) {
    var udate = await db.query(
      `update orders set food_time = '${req.food_time}' where id = ${req.user_id}`,
    );
  }
  if (store_number) {
    var udate = await db.query(
      `update orders set store_number = '${store_number}' where id = ${req.user_id}`,
    );
  }
  if (req.pizza_id) {
    var udate = await db.query(
      `update orders set pizza_id = '${req.pizza_id}' where id = ${req.user_id}`,
    );
  }
});

//Respond to a DELETE request to the /order route:
router.delete("/order", async (req, res) => {
  console.log(req.user_id);
  console.log(req.method);
  console.log(req.food_time);
  console.log(req.store_number);
  console.log(req.pizza_id);
  var udate = await db.query(
    `delete from orders where user_id = '${req.user_id}`,
    `delete from orders where method = '${req.method}'`,
    `delete from orders where food_time = '${req.food_time}'`,
    `delete from orders where store_number = '${store_number}'`,
    `delete from orders where pizza_id = '${req.pizza_id}'`,
  );
  res.send("Got a DELETE request at /order");
});

//Respond to a POST request to the /orders route:
router.post("/order", async (req, res) => {
  var udate = await db.query(
      `insert into orders (user_id, method, food_time, store_number, pizza_id) values ('${req.user_id}', '${req.method}','${req.food_time}','${store_number}','${req.pizza_id}')`,
    );
  
    res.send("Got a POST request at /order");
  });

  const app = express();
  const port = 3003;

  app.use(express.json()); // Middleware to parse JSON request bodies
module.exports = router;
