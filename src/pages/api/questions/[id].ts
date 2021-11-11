import questions from "../questionsDatabase";

export default function handler(req, res) {
  const idSelected = Number(req.query.id);

  const selectedQuestions = questions.filter(
    (question) => question.id === idSelected
  );

  if (selectedQuestions.length === 1) {
    const selectedQuestion = selectedQuestions[0].scrambleAnswers()
    return res.status(200).json(selectedQuestion.toConvertObject());
  } else {
    res.status(204).send()
  }

  res.status(200).json(questions[0].toConvertObject());
}
