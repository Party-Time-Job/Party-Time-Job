export interface LoginFormProps {
  email: string;
  password: string;
}

export interface TokenResponse {
  item: {
    token: string;
  };
}
