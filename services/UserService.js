import {User} from "../models/index.js"

class UserService {
  getAllUsersService = async () => {
    try {
      const data = await User.findAll({
        attributes:["name"],
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  getUserByIdService = async (id) => {
    try {
      return await User.findByPk(parseInt(id)).then(data => {return data});
    } catch (error) {
      throw error;
    }
  };
  
  createUserService = async (userData) => {
    try {
      const data = await User.create(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updateUserService = async(userData) => {
    try {
      await User.update(userData,
      { where: { id: userData.id } })
      .then(data => {return data});
      return userData;
    } catch (error) {
      throw error;
    }
  };
  deleteUserService = async (id2) => {
    try {
      await User.destroy({
        where: { id:id2},
      })
    } catch (error) {
      throw error;
    }
  };
}

export default UserService;
