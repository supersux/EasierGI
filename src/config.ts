// 支持的主题如下
export enum ColorTheme {
  // 热情红
  RED = "#FC345C",
  // 童话粉
  PINK = "#FBA1B7",
  // 极客蓝
  BLUE = "#0079FF",
  // 务实绿
  GREEN = "#79AC78",
  // 活力黄
  YELLOW = "#E6B566",
  // 神秘紫
  PURPLE = "#9376E0",
  // 漆黑
  DARK = '#282A3A',
}

const G_COLOR_THEME: string = "gColorTheme";
export { G_COLOR_THEME };

export function isDarkTheme(theme: any) {
  return theme == ColorTheme.DARK;
}

export enum Lang {
  ZH = "zh-cn",
  EN = "en-gb",
}

export interface Config {
  theme: ColorTheme;
  lang: Lang;
}
