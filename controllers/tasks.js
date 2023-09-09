const getAllTasks = async (req, res) => {
  res.send('All items will be here')
}

const createTask = async (req, res) => {
  res.json(req.body)
}

const getTask = async (req, res) => {
  res.send('Single item will be here')
}

const updateTask = async (req, res) => {
  res.send('Update item will be here')
}

const deleteTask = async (req, res) => {
  res.send('Delete item will be here')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
