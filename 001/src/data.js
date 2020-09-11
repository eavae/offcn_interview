// 生源类型
export const TRAINEE_SOURCE_TYPE = {
  OFFICIAL_ONLINE: "OFFICIAL_ONLINE",
  PRE_TRAINEE: "PRE_TRAINEE",
  WECHAT: "WECHAT",
};

// 生源类型对应的、用于展示的中文
export const TRAINEE_SOURCE_MAP = {
  [TRAINEE_SOURCE_TYPE.OFFICIAL_ONLINE]: "官网报名",
  [TRAINEE_SOURCE_TYPE.PRE_TRAINEE]: "前学员介绍",
  [TRAINEE_SOURCE_TYPE.WECHAT]: "微信公共号",
};

export const traineeDataType = [
  {
    key: "name",
    value: "姓名",
  },
  {
    key: "sourceType",
    value: "生源类型",
  },
];

export const trainees = [
  {
    id: 0,
    name: "赵先生",
    sourceType: TRAINEE_SOURCE_TYPE.OFFICIAL_ONLINE,
  },
  {
    id: 1,
    name: "钱女士",
    sourceType: TRAINEE_SOURCE_TYPE.PRE_TRAINEE,
  },
  {
    id: 2,
    name: "孙先生",
    sourceType: TRAINEE_SOURCE_TYPE.WECHAT,
  },
  {
    id: 3,
    name: "李女士",
    sourceType: TRAINEE_SOURCE_TYPE.OFFICIAL_ONLINE,
  },
  {
    id: 4,
    name: "周先生",
    sourceType: TRAINEE_SOURCE_TYPE.PRE_TRAINEE,
  },
  {
    id: 5,
    name: "吴女士",
    sourceType: TRAINEE_SOURCE_TYPE.WECHAT,
  },
  {
    id: 6,
    name: "郑先生",
    sourceType: TRAINEE_SOURCE_TYPE.OFFICIAL_ONLINE,
  },
  {
    id: 7,
    name: "王女士",
    sourceType: TRAINEE_SOURCE_TYPE.WECHAT,
  },
];
