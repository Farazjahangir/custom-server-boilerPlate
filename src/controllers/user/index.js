const controller = {};

controller.register = async function (req, res, next) {
  try {
    res.json({
      data: {},
      success: true,
      message: "Success"
    });
  } catch (e) {
    next({ message: e, status: 400 });
  }
};

module.exports = controller;
