const router = require("express").Router();
const auth = require("../middleware/auth.js");
const {
	createUser,
	getUsers,
	getUserById,
	login,
} = require("./user.controller.js");

router.post("/", createUser);
router.get("/all", getUsers);
router.get("/:id", auth, getUserById);
router.post("/login", login);

module.exports = router;
