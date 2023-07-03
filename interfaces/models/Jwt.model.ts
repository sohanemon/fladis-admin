export interface JwtModel {
  nameid: string;
  email: string;
  role: string;
  roleClaims: { [key: string]: string[] };
  nbf: number;
  exp: number;
  iat: number;
}
