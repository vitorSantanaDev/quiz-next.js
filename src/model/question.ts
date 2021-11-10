import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #utterance: string;
  #answers: AnswerModel[];
  #right: boolean;
  // #answered: boolean
  
  constructor(id: number, untterance: string, answers: AnswerModel[], right: boolean) {
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
}
