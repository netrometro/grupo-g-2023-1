export type LockScreenParamList = {
  AuthScreen: undefined;
  Home: undefined;
  UserProfile: undefined;
  Gifts: undefined;
  EcoInfo: undefined;
  EcoDicas: undefined;
};
export type AuthScreenProps = {
  navigation: {
    navigate: (screen: keyof LockScreenParamList) => void;
  };
};