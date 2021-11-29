const { user, literatur, book_mark, sequelize } = require("../../models");
const { Op } = require("sequelize");
const pathFile = "http://localhost:5000/uploads/";

exports.addLiteratur = async (req, res) => {
  try {
    const { idUser } = req.user;

    const newBookMark = await literatur.create({
      title: req.body.title,
      userId: req.user.id,
      publication_date: req.body.publication_date,
      pages: req.body.pages,
      ISBN: req.body.ISBN,
      author: req.body.author,
      attache: req.files.attache[0].filename,
      about: req.body.about,
      status: req.body.status,
      idUser,
    });

    if (newBookMark) {
      let data = await literatur.findAll({
        where: {
          id: newBookMark.id,
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
      status: "faileds",
      message: "Server Error",
    });
  }
};

exports.searchLiteratur = async (req, res) => {
  try {
    const data = await literatur.findAll({
      where: {
        title: { [Op.like]: `%${req.body.title}%` },
        status: "Approve",
      },
      order: [["id", "DESC"]],
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

exports.getLiteraturs = async (req, res) => {
  try {
    const data = await literatur.findAll({
      order: [["id", "DESC"]],
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

exports.myLiterature = async (req, res) => {
  try {
    const data = await literatur.findAll({
      where: {
        userId: req.user.id,
      },
      order: [["id", "DESC"]],
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

exports.bookMark = async (req, res) => {
  try {
    const { idUsers } = req.user;

    const newBookMark = await book_mark.create({
      titleId: req.body.titleId,
      Iduser: req.user.id,
      idUsers,
    });

    console.log("create", newBookMark);

    if (newBookMark) {
      let data = await book_mark.findAll({
        where: {
          id: newBookMark.id,
        },
        include: [
          {
            model: user,
            as: "dataUser",
            attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
            },
          },
          {
            model: literatur,
            as: "dataLiteratur",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      console.log("datas", data);

      res.send({
        status: "success",
        message: "Add book mark success",
        data,
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

exports.myCollections = async (req, res) => {
  try {
    const data = await book_mark.findAll({
      where: {
        Iduser: req.user.id,
      },
      order: [["id", "DESC"]],
      include: [
        {
          model: user,
          as: "dataUser",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: literatur,
          as: "dataLiteratur",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const collections = data.map((item) => ({
      id: item.id,
      titleId: item.titleId,
      title: item.dataLiteratur.title,
      userId: item.dataLiteratur.userId,
      fullName: item.dataUser.fullName,
      email: item.dataUser.email,
      phone: item.dataUser.phone,
      address: item.dataUser.address,
      gender: item.dataUser.gender,
      role: item.dataUser.role,
      publication_date: item.dataLiteratur.publication_date,
      pages: item.dataLiteratur.pages,
      ISBN: item.dataLiteratur.ISBN,
      author: item.dataLiteratur.author,
      attache: pathFile + item.dataLiteratur.attache,
      about: item.dataLiteratur.about,
      status: item.dataLiteratur.status,
    }));

    res.send({
      status: "success",
      data: collections,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteBookMark = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;

    await book_mark.destroy({
      where: {
        id,
      },
      idUser,
    });
    const data = await book_mark.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: "Delete collection success",
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

exports.deleteLiteratur = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;

    await literatur.destroy({
      where: {
        id,
      },
      idUser,
    });
    const data = await literatur.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: "Delete literatur success",
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
