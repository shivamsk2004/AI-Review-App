const aiService = require("..servies/ai.service");

module.exports = async (req, res) => {
  const { prompt } = req.query;
  if (!prompt) {
    return res.status(400).send("Prompt is reuired");
  }
  const response = await aiService(prompt);
};
