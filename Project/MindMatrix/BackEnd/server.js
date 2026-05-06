const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});



app.post("/analyze", async (req, res) => {

  try {

    const scores = req.body;

    const prompt =`
You are a friendly personality coach.

Analyze this Big Five personality result in a warm, conversational, human-like way.

Scores:
- Openness: ${scores.openness}
- Conscientiousness: ${scores.conscientiousness}
- Extraversion: ${scores.extraversion}
- Agreeableness: ${scores.agreeableness}
- Neuroticism: ${scores.neuroticism}

Instructions:
- Sound natural and engaging, not robotic.
- Be supportive and insightful.
- Add a little light humor occasionally.
- Explain personality in simple language.
- Keep the tone friendly like talking to a friend.
- Avoid sounding overly scientific.
- Make the analysis feel personal and interesting.

Include:
1. Overall personality summary
2. Strengths
3. Weaknesses or growth areas
4. Social behavior
5. Emotional tendencies
6. Fun closing remark

Keep the response detailed but enjoyable to read.
`;


    const response =
      await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]

      });


    res.json({
      result:
        response.choices[0].message.content
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Something went wrong"
    });

  }

});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});