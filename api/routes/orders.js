const Order = require("../models/Order");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

const CryptoJS = require("crypto-js");
const router = require("express").Router();

// CREATE
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedNewOrder = await newOrder.save();
    res.status(200).json(savedNewOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.body.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL orders
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.productID;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

module.exports = router;
