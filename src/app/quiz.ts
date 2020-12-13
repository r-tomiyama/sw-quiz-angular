const questionId = ['ep1', 'ep2', 'ep3', 'ep4'] as const
export type QuestionId = typeof questionId[number]
export interface Question {
  id: QuestionId
  text: string
  right: string
  options: string[]
}

export const TITLE: { [K in QuestionId]: string } = {
  ep1: 'ファントム・メナス',
  ep2: 'クローン戦争',
  ep3: 'シスの復讐',
  ep4: '新たなる希望'
}

export const questions: Question[] = [
  {
    id: 'ep1',
    text: 'タトゥイーンのポッドレースでアナキンのライバルであったレーサーの名前は？',
    right: 'セブルバ',
    options: ['ワトー', 'ダース・モール', 'セブルバ', 'ヌート・ガンレイ']
  },
  {
    id: 'ep2',
    text: 'クローン戦争が勃発した惑星の名前は？',
    right: 'ジオノーシス',
    options: ['ジオノーシス', 'ヤヴィン', 'エンドア', 'スカリフ']
  },
  {
    id: 'ep3',
    text: 'アナキンが共和国を裏切って最初に倒したジェダイは？',
    right: 'メイス・ウィンドゥ',
    options: [
      'キ＝アディ＝ムンディ',
      'アイラ・セキュラ',
      'クワイ＝ガン・ジン',
      'メイス・ウィンドゥ'
    ]
  },
  {
    id: 'ep4',
    text: 'ヤヴィンの戦いの生還者は次のうち誰？',
    right: 'ウェッジ・アンティリーズ',
    options: ['ビッグス・ダークライター', 'ウェッジ・アンティリーズ', 'ジェック・ポーキンス']
  }
]
