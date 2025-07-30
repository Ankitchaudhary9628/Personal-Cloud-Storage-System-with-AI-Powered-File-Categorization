const jwt = require('jsonwebtoken');
const users = []; // simple in-memory user storage
exports.signup = (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ message: 'Signup successful' });
};
exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ email }, 'secretkey');
  res.json({ token });
};