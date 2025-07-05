export const ScreenName = {
  HOME: 'Home',
  SEARCH: 'Search',
  PROFILE: 'Profile',
  NOTE: 'Note',
  ADD: 'Add',
} as const;

export type ScreenNameKey = keyof typeof ScreenName;
export type ScreenNameValue = (typeof ScreenName)[ScreenNameKey];
