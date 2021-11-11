import shuffle from "../../../functions/arrays"
import questionsDatabase from "../questionsDatabase"

export default function quiz(req, res) {
  const ids =  questionsDatabase.map((question) => question.id)
  res.status(200).json(shuffle(ids))
}