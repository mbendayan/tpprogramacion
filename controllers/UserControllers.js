import UserService from "../services/UserService.js";

class UserControllers {
  userService = new UserService();

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  getUserById = (req, res) => {
    this.userService.getUserByIdService(req.params.id).then((user) => {
      res.status(200).send(user);
    });
  };

  createUser = async (req, res) => {
    try {
      const { name, pass, mail } = req.body;
      const user = await this.userService.createUserService({ name, pass, mail });
      // console.log(`🚀 ~ UserControllers ~ createUser= ~ user:`, user);
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  updateUser = async (req, res) => {
      const { id,name, pass, mail } = req.body;
      const user = await this.userService.updateUserService({ id,name, pass, mail });
      res.status(200).send({ success: true, message: user });
  };
  deleteUser = (req, res) => {
    const user = this.userService.deleteUserService(req.params.id);
    res.status(200).send(user);
  };
}

export default UserControllers;
