const transcriptList = {
  ad_one: {
    header_1: '常春藤名校认证',
    header_2: '游戏化自主学习平台'
  },
  ad_two: {
    header_1: '123',
    header_2: '456',
    sub_title: '123456'
  },
  dialog: {
    slide_1: '123',
    slide_2: '123',
    slide_3: '123',
    slide_4: '123',
    slide_5: '123'
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
