const { user, literatur } = require("../../models");
const Joi = require("joi");
const pathFile = "http://localhost:5000/uploads/";

exports.addLiteratur = async (req, res) => {
  //   const schema = Joi.object({
  //     title: Joi.string().required(),
  //     userId: Joi.number().required(),
  //     publication_date: Joi.string().required(),
  //     pages: Joi.number().required(),
  //     ISBN: Joi.string().required(),
  //     author: Joi.string().required(),
  //     about: Joi.string().required(),
  //   });

  //   const { error } = schema.validate(req.body);

  //   if (error)
  //     return res.status(400).send({
  //       error: {
  //         message: error.details[0].message,
  //       },
  //     });

  try {
    const { idUser } = req.user;

    const newLiteratur = await literatur.create({
      title: req.body.title,
      userId: req.body.userId,
      publication_date: req.body.publication_date,
      pages: req.body.pages,
      ISBN: req.body.ISBN,
      author: req.body.author,
      attache: req.files.attache[0].filename,
      about: req.body.about,
      status: req.body.status,
      idUser,
    });

    if (newLiteratur) {
      let data = await literatur.findAll({
        where: {
          id: newLiteratur.id,
        },
        include: [
          {
            model: user,
            attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      const allData = data.map((item) => ({
        id: item.id,
        title: item.title,
        userId: item.userId,
        fullName: item.user.fullName,
        email: item.user.email,
        phone: item.user.phone,
        address: item.user.address,
        gender: item.user.gender,
        role: item.user.role,
        publication_date: item.publication_date,
        pages: item.pages,
        ISBN: item.ISBN,
        author: item.author,
        attache: pathFile + item.attache,
        about: item.about,
        status: item.status,
      }));

      res.send({
        status: "success",
        message: "Add literatur success",
        data: allData,
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

exports.getLiteraturs = async (req, res) => {
  try {
    const data = await literatur.findAll({
      include: [
        {
          model: user,
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const allData = data.map((item) => ({
      id: item.id,
      title: item.title,
      userId: item.userId,
      fullName: item.user.fullName,
      email: item.user.email,
      phone: item.user.phone,
      address: item.user.address,
      gender: item.user.gender,
      role: item.user.role,
      publication_date: item.publication_date,
      pages: item.pages,
      ISBN: item.ISBN,
      author: item.author,
      attache: pathFile + item.attache,
      about: item.about,
      status: item.status,
    }));

    res.send({
      status: "success",
      data: allData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getLiteraturId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await literatur.findAll({
      where: {
        id,
      },
      include: [
        {
          model: user,
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const literaturParams = data.map((item) => ({
      id: item.id,
      title: item.title,
      userId: item.userId,
      fullName: item.user.fullName,
      email: item.user.email,
      phone: item.user.phone,
      address: item.user.address,
      gender: item.user.gender,
      role: item.user.role,
      publication_date: item.publication_date,
      pages: item.pages,
      ISBN: item.ISBN,
      author: item.author,
      attache: pathFile + item.attache,
      about: item.about,
      status: item.status,
    }));

    res.send({
      status: "success",
      data: literaturParams,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.editLiteratur = async (req, res) => {
  try {
    const { id } = req.params;
    await literatur.update(
      {
        status: req.body.status,
      },
      {
        where: {
          id,
        },
      }
    );

    const data = await literatur.findAll({
      where: {
        id,
      },
      include: [
        {
          model: user,
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const datas = data.map((item) => ({
      id: item.id,
      title: item.title,
      userId: item.userId,
      fullName: item.user.fullName,
      email: item.user.email,
      phone: item.user.phone,
      address: item.user.address,
      gender: item.user.gender,
      role: item.user.role,
      publication_date: item.publication_date,
      pages: item.pages,
      ISBN: item.ISBN,
      author: item.author,
      attache: pathFile + item.attache,
      about: item.about,
      status: item.status,
    }));

    res.send({
      status: "success",
      data: datas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
