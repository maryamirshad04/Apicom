let users = [];
let id = 0;

exports.createUser = (req, res) => {
  let user = req.body;
  id++;
  user.id = id;
  users.push(user);
  res.send('user is created');
};

exports.listUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const newdata = req.body;
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).send('User not found');

  if (newdata.hasOwnProperty('name')) user.name = newdata.name;
  if (newdata.hasOwnProperty('age')) user.age = newdata.age;

  res.json('user is updated');
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).send('User not found');
  users.splice(index, 1);
  res.json('user is deleted');
};
