export type LoginOutputDto = Readonly<{
  token: AccessTokenDto;
  userData: UserDataDto;
}>;

export type UserDataDto = Readonly<{
  id: number;
  rut: string;
  code: string;
  name: string;
  fatherLastName: string;
  motherLastName: string;
  email: string;
  status: string;
}>;

export type AccessTokenDto = Readonly<{
  token: string;
}>;
