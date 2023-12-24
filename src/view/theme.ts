export enum Theme {
  LIGHT,
  DARK,
}

export function toThemeEnum(theme: string): Theme {
  if (theme == "dark") {
    return Theme.DARK;
  } else {
    return Theme.LIGHT;
  }
}

export function toThemeStr(theme: Theme): string {
  if (theme == Theme.DARK) {
    return "dark";
  } else {
    return "light";
  }
}
