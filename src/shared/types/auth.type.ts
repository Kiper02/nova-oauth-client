export type RegisterType = {
  username: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export interface IProfile {
  id: string;
  email: string;
  password: string;
  username: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UpdatedType = {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  displayName?: string;
  avatar?: Buffer;
};
