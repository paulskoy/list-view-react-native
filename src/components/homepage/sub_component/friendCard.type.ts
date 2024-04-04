import { HomepageProps } from "../homepage.type";

export type FriendCardProps = {
  image: any;
  name: string;
  age: number;
  gender: string;
  birthdate: string;
} & HomepageProps;
