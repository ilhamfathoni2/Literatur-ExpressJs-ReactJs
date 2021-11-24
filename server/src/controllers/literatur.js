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
      let data = await literatur.findOne({
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

      res.send({
        status: "success",
        message: "Add literatur success",
        data: [
          {
            id: data.id,
            userId: data.userId,
            publication_date: data.publication_date,
            pages: data.pages,
            ISBN: data.ISBN,
            author: data.author,
            attache: pathFile + data.attache,
            about: data.about,
            status: data.status,
          },
        ],
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

    const newData = data.map((item) => ({
      id: item.id,
      title: item.title,
      country: item.country,
      accomodation: item.accomodation,
      transportation: item.transportation,
      eat: item.eat,
      day: item.day,
      night: item.night,
      dateTrip: item.dateTrip,
      price: item.price,
      quota: item.quota,
      quotaMinus: item.quotaMinus,
      description: item.description,
      attache: JSON.parse(item.attache).map((attache, index) => ({
        id: index + 1,
        url: pathFile + attache,
      })),
    }));

    res.send({
      status: "success",
      data: newData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
