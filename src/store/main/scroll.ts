import { atom } from 'recoil';

export const PopularScrollState = atom<HTMLDivElement | undefined>({
  key: 'popularScroll',
  default: undefined,
});

export const CloseScrollState = atom<HTMLDivElement | undefined>({
  key: 'closeScroll',
  default: undefined,
});
