type UserState = {
  profile: {
    name?: string;
    email?: string;
    picture?: string;
    [key: string]: any;
  } | null;
};
