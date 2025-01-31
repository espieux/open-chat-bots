import { BotClientBase } from "./client_base";
import type { HttpAgent } from "@dfinity/agent";
import type { BotActionChatScope, BotClientConfig, Message } from "../types";
import type { Chat } from "../services/storageBucket/candid/types";
import type { ExecuteBotCommandResponse } from "../services/bot_gateway/candid/types";
export declare class BotApiKeyChatClient extends BotClientBase {
    #private;
    private agent;
    constructor(agent: HttpAgent, env: BotClientConfig, encodedJwt: string);
    createTextMessage(finalised: boolean, text: string): Promise<Message>;
    get scope(): BotActionChatScope;
    get messageId(): bigint;
    get threadRootMessageId(): number | undefined | null;
    get chatId(): Chat;
    sendTextMessage(finalised: boolean, text: string): Promise<ExecuteBotCommandResponse>;
    sendMessage(message: Message): Promise<ExecuteBotCommandResponse>;
    createImageMessage(finalised: boolean, imageData: Uint8Array, mimeType: string, width: number, height: number, caption?: string): Promise<Message>;
    sendImageMessage(finalised: boolean, imageData: Uint8Array, mimeType: string, width: number, height: number, caption?: string): Promise<ExecuteBotCommandResponse>;
    createFileMessage(finalised: boolean, name: string, data: Uint8Array, mimeType: string, fileSize: number, caption?: string): Promise<Message>;
    sendFileMessage(finalised: boolean, name: string, data: Uint8Array, mimeType: string, fileSize: number, caption?: string): Promise<ExecuteBotCommandResponse>;
}
