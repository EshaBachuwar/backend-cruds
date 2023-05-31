import User from '../models/User.js';

export const addUser = async (req, res, next) => {
  try {
    const { name, phone, email, hobbies } = req.body;
    console.log(req.body);
    const newEntry = new User({
      name: name,
      phone: phone,
      email: email,
      hobbies: hobbies,
    });
    const data = await User.create(newEntry);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const deletetUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const deletetUser = await User.findByIdAndDelete(userId);
    res.status(200).json(deletetUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

export const allUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};
