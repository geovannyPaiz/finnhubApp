type UserState = {
  profile: {
    name?: string;
    email?: string;
    picture?: string;
    [key: string]: any;
  } | null;
};

type AlertItem = {
  symbol: string;
  alertPrice: string | number;
};

type DropdownItem = {
  label: string;
  value: string | number | boolean;
};
