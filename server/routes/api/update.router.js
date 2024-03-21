const updataRouter = require('express').Router();
const { User } = require('../../db/models');

updataRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, nick, gender, telephone, email, date_of_birth } =
      req.body;

    const user = await User.findOne({ where: Number(id) });
    user.name = name;
    user.surname = surname;
    user.nick = nick;
    user.gender = gender;
    user.telephone = telephone;
    user.email = email;
    user.date_of_birth = date_of_birth;
    user.save();
    res.status(200).json(user);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = updataRouter