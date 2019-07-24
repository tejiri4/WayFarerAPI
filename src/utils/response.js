const response = (res, status, type, data) => res.status(status).json({
  status: type,
  data,
});

export default response;
