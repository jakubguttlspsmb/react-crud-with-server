const OldPeople = require("../models/oldpeople");

exports.getAllOldPeople = async (req, res) => {
  try {
    const result = await OldPeople.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "OldPeople found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "OldPeople not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOldPeopleById = async (req, res) => {
  try {
    const result = await OldPeople.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "OldPeople found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "OldPeople not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteOldPeople = async (req, res) => {
  try {
    const result = await OldPeople.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "OldPeople deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOldPeople = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      secondname: req.body.secondname,
      age: req.body.age,
      haircolor: req.body.haircolor,
      addiction: req.body.addiction,
      image: req.body.image,
    };
    const result = await OldPeople.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "OldPeople updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "OldPeople was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createOldPeople = async (req, res) => {
  try {
    const data = new OldPeople({
      name: req.body.name,
      secondname: req.body.secondname,
      age: req.body.age,
      haircolor: req.body.haircolor,
      addiction: req.body.addiction,
      image: req.body.image,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "OldPeople created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "OldPeople was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
