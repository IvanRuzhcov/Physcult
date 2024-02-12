const updataRouter = require('express').Router();
const { User } = require('../../db/models');

updataRouter.put('/:id', async (req, res) => {
    console.log('req')
  try {
    const { id } = req.params;
    const { name, surname, nick, gender, telephon, email, data_of_birth } =
      req.body;

    const user = await User.findOne({ where: Number(id) });
    user.name = name;
    user.surname = surname;
    user.nick = nick;
    user.gender = gender;
    user.telephone = telephon;
    user.email = email;
    user.date_of_birth = data_of_birth;
    user.save();
    res.status(200).json(user);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = updataRouter