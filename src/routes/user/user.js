const userController = require("../../controllers/user");

module.exports = function (router) {
  /**
   * @api {POST} /user/register Register user
   * @apiName Register User
   * @apiGroup user
   *
   * @apiParam (body) {String} email user's email
   * @apiParam (body) {String} password user's password
   * @apiParam (body) {String} contact user's contact
   * @apiParam (body) {String} name user's name
   * @apiParam (body) {String} [image] user's image in Base64 format
   *
   * @apiError message contains the error message. will be an array if the error is more than one, for example validation failed
   * @apiError success contains "false"
   */

  router.post("/register", userController.register);
};
