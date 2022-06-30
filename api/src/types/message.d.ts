export interface IMessageBody {
  content: string;
  groupId: string;
  toId?: string;
}

export interface IMessageModelData {
  content: string;
  lastIndex: number;
  log: {
    isSeen: boolean;
    seenDate: Date | null;
  };
  groupId: string;
  creatorId: string;
}
