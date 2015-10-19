import _ from 'lodash';
let lines = [
  {
    test_id: 1,
    scene1: {
      header: "",
      subtitle: "",
      dialogue: ""
    },
    scene2: {
      header: "题海战术太无聊？",
      subtitle: "答题攻地更有趣",
      dialogue: ""
    },
    scene3: {
      header: "学习效果在哪里？",
      subtitle: "排名进步天天见",
      dialogue: ""
    },
    scene4: {
      header: "考前时间不够用",
      subtitle: "掌握弱点快复习",
      dialogue: ""
    },
    scene5: {
      header: "爹娘想刷存在感",
      subtitle: "战绩随时报给你",
      dialogue: ""
    }
  },
  {
    test_id: 2,
    scene1: {
      header: "",
      subtitle: "",
      dialogue: ""
    },
    scene2: {
      header: "答題攻地",
      subtitle: "邊玩邊學戰勝題海",
      dialogue: ""
    },
    scene3: {
      header: "統計分析",
      subtitle: "天天看到學習成效",
      dialogue: ""
    },
    scene4: {
      header: "弱點探測",
      subtitle: "針對錯題考前衝刺",
      dialogue: ""
    },
    scene5: {
      header: "",
      subtitle: "",
      dialogue: ""
    }
  }
];

let ABTest = {
  get: (n) => {
    if (n === 2){
      return _.find(lines, { test_id: 2 });
    } else {
      return _.find(lines, { test_id: 1 });
    }
  }
}


export default ABTest;
