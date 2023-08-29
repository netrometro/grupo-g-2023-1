export type LockScreenParamList = {
  AuthScreen: undefined;
  Home: undefined;
  UserProfile: undefined;
  Gifts: undefined;
  EcoRank: undefined;
  Calculator: undefined;
};
export type AuthScreenProps = {
  navigation: {
    navigate: (screen: keyof LockScreenParamList) => void;
  };
};
