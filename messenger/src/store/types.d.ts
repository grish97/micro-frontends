declare module "@store" {
  type TAuthState = {
    id: string;
    username: string;
    email: string;
    accessToken: string;
    isLogged: boolean;
    persist: boolean;
    roles: number[];
  };

  type TMember = {
    id: string;
    username: string;
    email: string;
  };

  type TRoom = {
    id: string;
    content: string;
    seen: boolean;
    createdAt: string;
  };

  type TMemberState = {
    members: TMember[];
    room: TRoom[];
    selectedRoomId: string | null;
  };
}
