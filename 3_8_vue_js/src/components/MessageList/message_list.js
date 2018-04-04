export default {
  name: 'message-list',
  props: {
    'messages': {
      type: Array, // データの方を定義します。
      default: [], // デフォルト値を指定します
      required: true // 必須な要素の指定です
    }
  }
}
