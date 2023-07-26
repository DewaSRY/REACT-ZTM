export enum BUTTON_TYPE_CLASSES {
  BASE = "BASE",
  GOOGLE = "google-sign-in",
  INVERTED = "inverted",
}
export enum CHEVRON_TYPE_CLASSES {
  CROSS = "cross",
  RIGHT = "right-arrow",
  LEFT = "left-arrow",
}

export type ButtonTypes =
  | BUTTON_TYPE_CLASSES.BASE
  | BUTTON_TYPE_CLASSES.GOOGLE
  | BUTTON_TYPE_CLASSES.INVERTED;
export type ChevronTypes =
  | CHEVRON_TYPE_CLASSES.CROSS
  | CHEVRON_TYPE_CLASSES.LEFT
  | CHEVRON_TYPE_CLASSES.RIGHT;
