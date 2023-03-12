interface User {
  id: string;
  name: string;
  sex: SEX
}

enum SEX {
  MALE, FEMALE
}

export { User, SEX };
