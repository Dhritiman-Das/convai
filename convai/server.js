const PORT = 5000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/completions", async (req, res) => {
  console.log(req.body);
  const prompt = req.body.prompt;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log("Your server is runnning on PORT" + PORT));
