export type LockScreenParamList = {
  AuthScreen: undefined;
  Home: undefined;
  UserProfile: undefined;
  EcoHints: undefined;
  EcoRank: undefined;
  Calculator: undefined;
  TransportHints: undefined;
  FoodHints: undefined;
  WorkHints: undefined;
  PlasticHints: undefined;
};
export type AuthScreenProps = {
  navigation: {
    navigate: (screen: keyof LockScreenParamList) => void;
  };
};
