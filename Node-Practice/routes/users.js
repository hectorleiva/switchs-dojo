const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

var router = express.Router();

// Connect to PostgreSQL
const sequelize = new Sequelize("pizzabox", "aswitch", "aswitch", {
  host: "localhost",
  dialect: "postgres",
  port: +process.env.POSTGRES_PORT || 5432,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Define Pizza model
const Pizza = sequelize.define("Pizza", {
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  toppings: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  crust: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialInstructions: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();

// POST a new pizza order
router.post("/pizza", async (req, res) => {
  try {
    const newPizza = await Pizza.create(req.body);
    res
      .status(201)
      .json({ message: "New pizza order created!", pizza: newPizza });
  } catch (error) {
    res.status(400).json({ message: "Error creating pizza order", error });
  }
});

// GET a specific pizza order by ID
router.get("/pizza/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findByPk(req.params.id);
    if (pizza) {
      res.json({ pizza });
    } else {
      res.status(404).json({ message: "Pizza order not found!" });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid ID format", error });
  }
});

// PUT update an existing pizza order
router.put("/pizza/:id", async (req, res) => {
  try {
    const [updated] = await Pizza.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedPizza = await Pizza.findByPk(req.params.id);
      res.json({
        message: `Pizza with ID: ${req.params.id} updated!`,
        pizza: updatedPizza,
      });
    } else {
      res.status(404).json({ message: "Pizza order not found!" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating pizza order", error });
  }
});

// DELETE a pizza order
router.delete("/pizza/:id", async (req, res) => {
  try {
    const deleted = await Pizza.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: `Pizza with ID: ${req.params.id} deleted!` });
    } else {
      res.status(404).json({ message: "Pizza order not found!" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error deleting pizza order", error });
  }
});

module.exports = router;
