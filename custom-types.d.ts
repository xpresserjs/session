import {Session, SessionData, SessionOptions} from "express-session";

export interface XSessionCustomData extends SessionData {
}

export type XSession = Session & Partial<XSessionCustomData>;

export type XSessionCustomStore = (
    use: (options?: SessionOptions) => any,
) => any;

export interface XSessionConfig {
    enabled: boolean,
    useDefault: boolean,
    customStore?: XSessionCustomStore | false,
    storeConfig: any,
    sessionConfig: SessionOptions,
}