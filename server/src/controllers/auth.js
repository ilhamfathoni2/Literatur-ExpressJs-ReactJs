const { user } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const schema = Joi.object({
    fullName: Joi.string().min(4).required(),
    email: Joi.string().email().min(5).required(),
    password: Joi.string().min(5).required(),
    phone: Joi.string().min(11).required(),
    address: Joi.string().required(),
    gender: Joi.string().required(),
    role: Joi.string(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExist) {
      return res.status(400).send({
        status: "failed",
        message: "email already exist",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const userRole = "user";

    const newUser = await user.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      role: userRole,
    });

    // generate token
    const token = jwt.sign(
      {
        id: newUser.id,
        fullName: newUser,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.TOKEN_KEY
    );

    res.status(200).send({
      status: "success",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (userExist) {
      const isValid = await bcrypt.compare(
        req.body.password,
        userExist.password
      );

      if (!isValid) {
        return res.status(400).send({
          status: "failed",
          message: "credential is invalid",
        });
      }

      // generate token
      const token = jwt.sign(
        {
          id: userExist.id,
          fullName: userExist.fullName,
          email: userExist.email,
          role: userExist.role,
        },
        process.env.TOKEN_KEY
      );

      res.status(200).send({
        status: "success",
        data: {
          email: userExist.email,
          token,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const { adminOnly } = req.user;

    const data = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
      adminOnly,
    });

    res.send({
      status: "success",
      message: "Get data user success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;

    await user.destroy({
      where: {
        id,
      },
      idUser,
    });
    const data = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    res.send({
      status: "success",
      message: "Delete user success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const dataUser = await user.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "success",
      data: {
        id: dataUser.id,
        fullName: dataUser.fullName,
        email: dataUser.email,
        phone: dataUser.phone,
        address: dataUser.address,
        gender: dataUser.gender,
        role: dataUser.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.user = async (req, res) => {
  try {
    const dataUser = await user.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "success",
      data: [
        {
          id: dataUser.id,
          fullName: dataUser.fullName,
          email: dataUser.email,
          phone: dataUser.phone,
          address: dataUser.address,
          gender: dataUser.gender,
          role: dataUser.role,
        },
      ],
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await user.update(
      {
        avatar: req.files.avatar[0].filename,
      },

      {
        where: {
          id: req.user.id,
        },
      }
    );
    const data = await user.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    res.send({
      status: "success",
      message: "Update success",
      datas: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
