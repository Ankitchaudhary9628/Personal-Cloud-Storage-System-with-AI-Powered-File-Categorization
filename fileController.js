const File = require('../models/File');
const { spawn } = require('child_process');
exports.uploadFile = async (req, res) => {
  // Mock file upload
  const fileName = req.body.name;
  const fileType = req.body.type;
  const fileUrl = `https://your-cloud/${fileName}`;

  const py = spawn('python3', ['backend/ai/categorize.py', fileName]);
  let category = '';
  py.stdout.on('data', (data) => category += data.toString());
  py.on('close', async () => {
    const file = new File({ userId: req.user.email, name: fileName, url: fileUrl, type: fileType, category });
    await file.save();
    res.json(file);
  });
};
exports.listFiles = async (req, res) => {
  const files = await File.find({ userId: req.user.email });
  res.json(files);
};
