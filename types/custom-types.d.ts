import { Session, SessionData, SessionOptions } from "express-session";
export declare type XSession = Session & Partial<SessionData>;
export interface XSessionCustomData extends XSession {
}
export declare type XSessionCustomStore = (use: (options?: SessionOptions) => any) => any;
export interface XSessionConfig {
    enabled: boolean;
    useDefault: boolean;
    customStore?: XSessionCustomStore | false;
    storeConfig: any;
    sessionConfig: SessionOptions;
}
