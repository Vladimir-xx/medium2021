export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  usernname: string;
  bio: string | null;
  image: string | null;
  token: string;
}
