const validateFieldBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined || body.description === undefined) {
    return res.status(400).json({ message: 'The field "Title" or "Description" is required' })
  }

  if (body.title === '' || body.description === '') {
    return res.status(400).json({ message: 'title or description cannot be empty' })
  }

  next();
}

const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.completed === undefined) {
    return res.status(400).json({ message: 'The field "Completed" is required' })
  }

  if (body.completed === '' ) {
    return  res.status(400).json({ message: 'completed must be mark' })
  }

  next();
}

module.exports = {
  validateFieldBody,
  validateFieldStatus
}