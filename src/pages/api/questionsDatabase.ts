import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(200, "Qual o inseto tramite a doença de chagas?", [
    AnswerModel.wrong("Abelha"),
    AnswerModel.wrong("Barata"),
    AnswerModel.wrong("Pulga"),
    AnswerModel.certain("Barbeiro"),
  ]),

  new QuestionModel(201, "Qual metodo é para a iteração de array em javascript", [
    AnswerModel.wrong("querySelector()"),
    AnswerModel.wrong("addEventListener"),
    AnswerModel.wrong("ClassList()"),
    AnswerModel.certain("reduce"),
  ]),

  new QuestionModel(202, "Qual é o coletivo de cães?", [
    AnswerModel.wrong("Ninhada"),
    AnswerModel.wrong("Alcatea"),
    AnswerModel.wrong("Cachorrada"),
    AnswerModel.certain("Matilha"),
  ]),

  new QuestionModel(203, "Qual o fruto é conhecido no norte e nordeste como jerimum?", [
    AnswerModel.wrong("Manga"),
    AnswerModel.wrong("Abacate"),
    AnswerModel.wrong("Jaboticaba"),
    AnswerModel.certain("Abóbora"),
  ]),
];

export default questions;
