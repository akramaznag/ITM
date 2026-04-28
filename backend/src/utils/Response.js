const response = (res,Status, message, data = null) => {
  return res.status(Status).json({
    message,
    data
  });
};
export default response;