const Test = (req, res, next) => {
  res.status(200).json({ route: '/v1/testLahan' });
};

export default Test;
