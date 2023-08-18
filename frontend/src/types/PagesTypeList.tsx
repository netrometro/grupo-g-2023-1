export type LockScreenParamList = {
  AuthScreen: undefined;
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Gifts: undefined;
  EcoRank: undefined;
};
export type AuthScreenProps = {
  navigation: {
    navigate: (screen: keyof LockScreenParamList) => void;
  };
};
