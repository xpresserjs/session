import {Session, SessionData, SessionOptions} from "express-session";

export type XSession = Session & Partial<SessionData>;

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

declare global {
    namespace Xpresser {
        // Inject additional properties on http
        interface Http {
            /**
             * This request's `Session` object.
             * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
             * [Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to add your own properties.
             *
             * @see SessionData
             */
            session: XSession;

            /**
             * This request's session ID.
             * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
             */
            sessionID: string;
        }
    }
}