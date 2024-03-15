export interface SignupFormProps {
  email: string;
  password: string;
  passwordConfirmation: string;
  type: string;
}

export interface TokenResponse {
  item: {
    token: string;
  };
}

export interface SignupFormComponentProps {
  onSubmit: (data: SignupFormProps) => Promise<void>;
}
