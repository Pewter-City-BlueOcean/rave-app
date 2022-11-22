import create from 'zustand';

export const useRaveStore = create(set => ({
  currentGroup: {},
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