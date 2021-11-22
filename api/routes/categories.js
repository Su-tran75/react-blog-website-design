const router = require("express").Router();
const Category = require("../models/Category");

//CREATE CAT
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CAT
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE CAT
router.get("/:id", async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ONE CAT
router.put("/:id", async (req, res) => {
  try {
    const cat = await Category.findByIdAndUpdate(req.params.id);
    if (cat.id === req.params.id) {
      try {
        const updatedCat = await Category.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCat);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can not update category");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ONE CAT
router.delete("/:id", async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    console.log("cat", cat)
    if (cat.id === req.params.id) {
      try {
        await cat.delete();
        res.status(200).json("Cat has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can not delete category");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
