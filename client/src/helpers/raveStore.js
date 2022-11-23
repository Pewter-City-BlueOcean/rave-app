import create from 'zustand';

export const useRaveStore = create(set => ({
  currentGroup: {},
  groups: [],
  userId: '',
  profileViewing: {},
  setCurrentGroup: (group) => {
    set({currentGroup: group});
  },
  setUserId: (userId) => {
    set({ userId });
  },
  setProfileViewing: (profile) => {
    set({profileViewing: profile});
  }

}));

/*
import { useRaveStore } from '../helpers/raveStore.js';

//getter
const currentGroup = useRaveStore((state) => state.currentGroup);
etc.

//setter
const setCurrentGroup = useRaveStore((state) => state.setCurrentGroup);
etc.
*/
