

const validate = (schema) => async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        headers: req.headers,
      });
      return next();
    } catch (err) {
      return res.json({
        message: "Something went wrong while validate the request",
        status: 400,
        error: err,
      });
    }
  };
  module.exports = validate;
