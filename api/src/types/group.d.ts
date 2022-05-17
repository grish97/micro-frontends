export interface IGroupBody {
  name: string | null;
  members: string[];
  isPrivate: boolean;
  creatorId: string;
}

export interface IGroupModelData {
  name: string | null;
  isPrivate: boolean;
  creatorId: string;
}
