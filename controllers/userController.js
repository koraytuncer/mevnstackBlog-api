import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      succeded: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(res)

    const user = await User.findOne({ username });

    let same = false;

    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      return res.status(401).json({
        succeded: false,
        message: "Böyle bir kullanıcı yok.",
      });
    }

    if (same) {
      res.status(201).json({
        succeded: true,
        message: "Giriş İşlemi Başarılı.",
        user,
        token: createToken(user._id),
      });
    } else {
      res.status(401).json({
        succeded: false,
        message: "Giriş İşlemi Başarısız.",
      });
    }
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "5h",
  });
};

export { createUser, loginUser };
