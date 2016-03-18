const transcriptList = {
  ad_one: {
    header_1: '常春藤名校认证',
    header_2: '游戏化自主学习平台'
  },
  dialog: {
    slide_1: '',
    slide_2: '答题攻地战胜题海！',
    slide_3: '哥是靠腦力吃飯哒！',
    slide_4: '就用这题决胜负吧！',
    slide_5: '学霸是我！'
  }
}

export default function translation(input = '', source = transcriptList){
  const self = {}
  const keys = input.split('.')
  self.content = ''
  self.readSourceByKey = (source, key) => {
    return source[key]
  }
  self.startGetTranslation = (content, source, keys, index = 0) => {
    let contentAfterTranslation = content, current = index
    if (self.readSourceByKey(source, keys[current])) {
      contentAfterTranslation = self.readSourceByKey(source, keys[current])
      self.current += 1
      self.startGetTranslation(contentAfterTranslation, source, keys, current + 1)
    } else {
      self.content = contentAfterTranslation[keys[current]]
    }
  }
  self.startGetTranslation(self.content, source, keys)
  return self.content
}
