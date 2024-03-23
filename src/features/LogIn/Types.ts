export interface LoginFormProps {
  email: string;
  password: string;
}

export interface TokenResponse {
  item: {
    token: string;
    user: {
      href: string;
      item: {
        address?: string;
        bio?: string;
        email: string;
        id: string;
        name?: string;
        phone?: string;
        type: 'employee' | 'employer';
      };
    };
  };
}

export interface LoginFormComponentProps {
  onSubmit: (data: LoginFormProps) => Promise<void>;
}
