// 官方译名表 / Canonical Names
// 单一事实源 (single source of truth)。所有 UI 字符串都应从这里读取。
// 修改这里即可全局生效。

window.NAMES = {
  // === 政治体 / Polities ===
  centralUnion: {
    zh: '央联',
    zhFull: '中央联合政体',
    en: 'Central Union',
    enFull: 'the Central Union Polity',
    enShort: 'CU',
    aliases: ['央联', '西联', '中央', '中央联合政体'],
  },
  wiescaute: {
    zh: '帝国',
    zhFull: '维斯冈特帝国',
    en: 'Wiescaute Empire',
    enFull: 'the Wiescaute Empire',
    enShort: 'WE',
    aliases: ['维斯冈特帝国', '维斯冈特', '帝国'],
  },
  rozne: {
    zh: '罗兹涅',
    zhFull: '罗兹涅共和国',
    en: 'Rozne',
    enFull: 'the Holy Republic of Rozne',
    enShort: 'HR',
    aliases: ['罗兹涅', '北陆', '前罗兹涅', '前罗兹涅地区', '罗兹涅共和国'],
  },

  // === 央联机构 ===
  bureau11: {
    zh: '第11局',
    zhFull: '第十一特别行动局',
    en: 'Bureau Eleven',
    enFull: 'the 11th Special Operations Bureau',
    enShort: 'M / Maivico',
    aliases: ['第11局', '11局', '第十一局', '十一局', '麦维科', 'M局'],
  },
  bureau7: {
    zh: '第7局',
    zhFull: '第七特别行动局',
    en: 'Bureau Seven',
    enFull: 'the 7th Special Operations Bureau',
    aliases: ['第7局', '7局', '第七局', '第7特别行动局'],
  },
  operationsDept: {
    zh: '行动部',
    en: 'Operations Division',
    enFull: 'the 11th Bureau Operations Division',
    aliases: ['行动部', '11局行动部'],
  },
  garden: {
    zh: '植园',
    en: 'The Garden',
    enFull: 'the Garden (11th Bureau Medical Research Institute)',
    aliases: ['植园'],
  },
  wuGuard: {
    zh: '【乌】',
    zhFull: '中央护卫队【乌】',
    en: 'Wu',
    enFull: 'the Wu Central Guard',
    aliases: ['中央护卫队', '禁卫军', '乌', '中央护卫队【乌】'],
  },

  // === 帝国机构 ===
  hive: {
    zh: '蜂巢',
    en: 'The Hive',
    enFull: 'the Hive',
    aliases: ['蜂巢'],
  },
  ninthArmy: {
    zh: '第九军',
    en: 'Ninth Army',
    enFull: 'the Imperial Ninth Army',
    aliases: ['第九军', '机动旅', '特殊机动旅'],
  },

  // === 南岛 ===
  jianzhao: {
    zh: '剑草',
    en: 'Sword Grass',
    enFull: 'the Sword Grass Insurgency',
    aliases: ['剑草', '剑草游击队', '剑草山地纵队'],
  },
  chirui: {
    zh: '赤蕊',
    en: 'Crimson Pistil',
    enFull: 'the Crimson Pistil Network',
    aliases: ['赤蕊', '红鹭馆'],
  },

  // === 家族 ===
  solomon: {
    zh: '所罗门家族',
    en: 'House Solomon',
    enFull: 'House Solomon',
    aliases: ['所罗门家族', '所罗门'],
  },

  // === 概念/物质 ===
  duo: {
    zh: '铎',
    zhFull: '铎 / 流金',
    en: 'Duo',
    enFull: 'Duo (Liquid Gold)',
    aliases: ['铎', '流金', '殁钢'],
  },
  sequence: {
    zh: '序列',
    en: 'Sequence',
    enFull: 'the Sequence System',
    aliases: ['神序列', '序列体系', '序列持有者', '序列'],
  },
  rossiWave: {
    zh: '罗氏波形',
    zhFull: '罗氏波',
    en: 'Rossi Waveform',
    enFull: 'Rossi Waveform',
    aliases: ['罗氏波形','罗氏波'],
  },
  aursicht: {
    zh: '奥尔希特',
    en: 'Aursicht',
    enFull: 'Aursicht (the Imperial Crown)',
    aliases: ['奥尔希特', '奥尔希特冠冕', '奥尔希特的反证'],
  },
};

// Helper: 在词条页用全称 (enFull)，在 chapter logo banner 用 enFull (大写)
window.getName = function (key, field) {
  const n = window.NAMES[key];
  if (!n) return key;
  return n[field || 'zhFull'] || n[field || 'zh'] || n.zh;
};
