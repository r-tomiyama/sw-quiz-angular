import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core'

import { Question } from '../quiz'
import { AnswerContent } from '../quiz/quiz.component'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() index: number
  @Input() question: Question
  @Input() answer: string
  @Input() isRight: boolean
  @Output() handleChange = new EventEmitter<AnswerContent>()

  constructor() {}

  ngOnInit(): void {}

  onChange($event: Readonly<Event>) {
    console.log('hoge')
    this.handleChange.emit({
      id: this.question.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: ($event.currentTarget as any).value
    })
  }

  changeResult() {
    if (this.isRight !== undefined) {
      return this.isRight ? '正解' : '不正解'
    }
  }
}
