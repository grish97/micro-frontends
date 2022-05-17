export interface IMessageBody {
  content: string;
  groupId: string;
  toId?: string;
}

export interface IMessageModelData {
  content: string;
  lastIndex: number;
  groupId: string;
  creatorId: string;
}
