const Duch = require("../models/duch");

exports.getAllDuch = async (req, res) => {
  try {
    const result = await Duch.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Cats found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Cats not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDuchById = async (req, res) => {
  try {
    const result = await Duch.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Duch found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Duch not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteDuch = async (req, res) => {
  try {
    const result = await Duch.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Duch deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDuch = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      secondname: req.body.secondname,
      age: req.body.age,
      haircolor: req.body.haircolor,
      addiction: req.body.addiction,
    };
    const result = await Duch.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Duch updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "ODuch was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createDuch = async (req, res) => {
  try {
    const data = new Duch({
      name: req.body.name,
      secondname: req.body.secondname,
      age: req.body.age,
      haircolor: req.body.haircolor,
      addiction: req.body.addiction,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Duch created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Duch was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
