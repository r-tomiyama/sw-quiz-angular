import { Component, OnInit } from '@angular/core'
import { Question, QuestionId, questions } from '../quiz'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[]
  numOfQuestions: number = questions.length
  results: {
    [K in QuestionId]?: {
      answer?: string
      isRight?: boolean
    }
  }
  numOfRights = 0

  constructor() {}

  ngOnInit(): void {
    this.questions = questions
    this.results = questions.reduce((acc, cur) => ({ [cur.id]: {}, ...acc }), {})
  }

  onHandleChange(answer: AnswerContent) {
    this.results[answer.id].answer = answer.value
    this.results[answer.id].isRight =
      questions.find((v) => v.id === answer.id).right === answer.value
    this.countRightAnswer()
  }

  countRightAnswer() {
    this.numOfRights = Object.keys(this.results).filter((v) =>
      Boolean(this.results[v].isRight)
    ).length
  }
}

export interface AnswerContent {
  id: QuestionId
  value: string
}
