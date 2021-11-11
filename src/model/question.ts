import shuffle from "../functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #utterance: string;
  #answers: AnswerModel[];
  #right: boolean;
  // #answered: boolean
  
  constructor(id: number, untterance: string, answers: AnswerModel[], right = false) {
    this.#id = id;
    this.#utterance = untterance;
    this.#answers = answers;
    this.#right = right;
  }

  get id() {
    return this.#id
  }

  get untterance() {
    return this.#utterance
  }

  get answers() {
    return this.#answers
  }

  get right() {
    return this.#right
  }

  get answered() {
    for(let answer of this.#answers) {
      if(answer.revealed) {
        return true
      }
    }
    return false
  }

  toConvertObject() {
    return {
      id: this.#id,
      utterance: this.#utterance,
      answers: this.#answers.map((question) => question.toConvertObject()),
      right: this.#right
    }
  }

  scrambleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#utterance, scrambledAnswers, this.#right)
  }
}
