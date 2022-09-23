const UserRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");



const {
  getAll,
  getById,
  getByUserName,
  register,
  login,
  update,
  remove

} = require("./user.controller");

UserRoutes.post("/signup", upload.single("avatar"), register);
UserRoutes.post("/login", login);
UserRoutes.get("/", getAll);
UserRoutes.get("/:id", getById);
UserRoutes.get("/username/:username", [authorize], getByUserName);
UserRoutes.patch('/:id', [authorize], upload.single("avatar"), update);
UserRoutes.delete('/:id', [authorize], remove);

module.exports = UserRoutes;
