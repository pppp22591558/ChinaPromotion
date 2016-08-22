import _ from 'lodash';

function getLinesByVersion(version) {
  if (version == 'us') {
    return [
      {
        test_id: 1,
        title: "PaGamO App",
        scene1: {
          header_1: "Winner of Reimagine",
          header_2: "Education Award 2014",
          subtitle: "PaGamO - Because Learning should feel like Winning!",
          long_press: "",
          other_browsers: ""
        },
        scene2: {
          header: "Build Your Own Kingdom of Knowledge!",
          subtitle: "Occupy Territories By Answering Questions",
          dialogue: "I can be a hero!"
        },
        scene3: {
          header: "Lead the world!",
          subtitle: "Take the lead in our world ranking!",
          dialogue: "#Winniiing!",
          class_mates: {
            a: 'Classmate A',
            b: 'Classmate B',
            c: 'Classmate C',
            d: 'Classmate D',
            me: 'Me'
          }
        },
        scene4: {
          header: "Perfect for Review!",
          subtitle: "Practise the Subjects You Like!",
          dialogue: "I aced it!"
        },
        scene5: {
          header: "",
          subtitle: "",
          dialogue: ""
        }
      }
    ];
  } else if (version == 'tw') {
    return [
      {
        test_id: 1,
        title: "PaGamO全球首創電競學習App",
        scene1: {
          header_1: "PaGamO全球首創",
          header_2: "電競學習法",
          subtitle: "超過300,000學生都在瘋狂PK<br/>你還不來佔地嗎？",
          long_press: "",
          other_browsers: ""
        },
        scene2: {
          header: "攻城掠地",
          subtitle: "邊玩邊學 戰勝測驗券",
          dialogue: "喔不，又被攻擊了！"
        },
        scene3: {
          header: "個人化統計分析",
          subtitle: "自己的成績 自己看",
          dialogue: "全球第一!",
          class_mates: {
            a: '同學A',
            b: '同學 B',
            c: '同學 C',
            d: '同學 D',
            me: '本學霸我'
          }
        },
        scene4: {
          header: "考前大補帖",
          subtitle: "自己的錯題 自己改",
          dialogue: "安拉，我玩得很好！"
        },
        scene5: {
          header: "",
          subtitle: "",
          dialogue: ""
        }
      }
    ];
  } else {
    return [
      {
        test_id: 1,
        title: "PaGamO中国学生定制版",
        scene1: {
          header_1: "2014沃顿商学院",
          header_2: "全球教育创新总冠军",
          subtitle: "中国学生定制版",
          long_press: "长按二维码後点选「识别图中QR Code」",
          other_browsers: "亲，请动动手指，点击右上角按钮，用其他浏览器下载！"
        },
        scene2: {
          header: "答题攻地",
          subtitle: "边玩边学战胜题海",
          dialogue: "哇擦，哥的地被占了!"
        },
        scene3: {
          header: "統計分析",
          subtitle: "天天看到学习成效",
          dialogue: "学霸是我！",
          class_mates: {
            a: '同學A',
            b: '同學B',
            c: '同學C',
            d: '同學D',
            me: '本學霸我'
          }
        },
        scene4: {
          header: "弱点探测",
          subtitle: "针对错题考前冲刺",
          dialogue: "放心，妥妥滴"
        },
        scene5: {
          header: "",
          subtitle: "",
          dialogue: "成为我的小伙伴吧！"
        }
      },
      {
        test_id: 2,
        scene1: {
          header_1: "2014沃顿商学院",
          header_2: "全球教育创新总冠军",
          subtitle: "中国学生定制版"
        },
        scene2: {
          header: "题海战术太无聊？",
          subtitle: "答题攻地更有趣",
          dialogue: "哇擦，哥的地被占了!"
        },
        scene3: {
          header: "学习效果在哪里？",
          subtitle: "排名进步天天见",
          dialogue: "学霸是我！"
        },
        scene4: {
          header: "考前时间不够用",
          subtitle: "掌握弱点快复习",
          dialogue: "放心，妥妥滴"
        },
        scene5: {
          header: "爹娘想刷存在感",
          subtitle: "战绩随时报给你",
          dialogue: "成为我的小伙伴吧！"
        }
      },
      {
        test_id: 3,
        scene1: {
          header_1: "2014華頓商學院",
          header_2: "全球教育創新總冠軍",
          subtitle: "台灣學生定製版",
          long_press: "長按左圖後點選「識別圖中QR Code」",
          other_browsers: "親，請動動手指，點擊右上角按鈕，用其他瀏覽器下載！"
        },
        scene2: {
          header: "答題攻地",
          subtitle: "邊玩邊學戰勝考古題",
          dialogue: ""
        },
        scene3: {
          header: "統計分析",
          subtitle: "天天看到學習成效",
          dialogue: ""
        },
        scene4: {
          header: "弱點分析",
          subtitle: "針對錯題考前衝刺",
          dialogue: ""
        },
        scene5: {
          header: "",
          subtitle: "",
          dialogue: ""
        }
      },
      {
        test_id: 4,
        scene1: {
          header_1: "2014華頓商學院",
          header_2: "全球教育創新總冠軍",
          subtitle: "台灣學生定製版"
        },
        scene2: {
          header: "答題攻地",
          subtitle: "邊玩邊學戰勝考古題",
          dialogue: ""
        },
        scene3: {
          header: "統計分析",
          subtitle: "天天看到學習成效",
          dialogue: ""
        },
        scene4: {
          header: "弱點分析",
          subtitle: "針對錯題考前衝刺",
          dialogue: ""
        },
        scene5: {
          header: "",
          subtitle: "",
          dialogue: ""
        }
      },
      {
        test_id: 5,
        scene1: {
          header_1: "2014沃顿商学院",
          header_2: "全球教育创新总冠军",
          subtitle: "中国学生定制版"
        },
        scene2: {
          header: "答题攻地",
          subtitle: "边玩边学战胜题海",
          dialogue: "哇擦，哥的地被占了!"
        },
        scene3: {
          header: "統計分析",
          subtitle: "天天看到学习成效",
          dialogue: "学霸是我！"
        },
        scene4: {
          header: "弱点探测",
          subtitle: "针对错题考前冲刺",
          dialogue: "放心，妥妥滴"
        },
        scene5: {
          header: "",
          subtitle: "",
          dialogue: "成为我的小伙伴吧！"
        }
      },
      {
        test_id: 6,
        scene1: {
          header_1: "2014沃顿商学院",
          header_2: "全球教育创新总冠军",
          subtitle: "中国学生定制版"
        },
        scene2: {
          header: "题海战术太无聊？",
          subtitle: "答题攻地更有趣",
          dialogue: "哇擦，哥的地被占了!"
        },
        scene3: {
          header: "学习效果在哪里？",
          subtitle: "排名进步天天见",
          dialogue: "学霸是我！"
        },
        scene4: {
          header: "考前时间不够用",
          subtitle: "掌握弱点快复习",
          dialogue: "放心，妥妥滴"
        },
        scene5: {
          header: "爹娘想刷存在感",
          subtitle: "战绩随时报给你",
          dialogue: "成为我的小伙伴吧！"
        }
      }
    ];
  }
}

let ABTest = {
  get: (version, n) => {
    const lines = getLinesByVersion(version)
    if (n >= 1 && n <= 6) {
      return _.find(lines, {test_id: n});
    } else {
      return _.find(lines, {test_id: 1});
    }
  }
}


export default ABTest;
