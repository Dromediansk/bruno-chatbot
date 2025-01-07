import type { IMesssage } from "~/interfaces/IMessage";

export const useIsChatting = () => useState("chatting", () => false);
export const useMessages = () => useState<IMesssage[]>("messages", () => []);
