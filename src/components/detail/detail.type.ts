import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomepageStackParamList } from "../../routes/stack/homepageStack.type";

export type DetailProps = NativeStackScreenProps<
  HomepageStackParamList,
  "Detail"
>;
