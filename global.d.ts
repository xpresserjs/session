import {XSession} from "./custom-types";

declare namespace Xpresser {
    // Inject additional properties on http
    interface Http {
        // Session Data
        session: XSession;
        // Session Id
        sessionID: string;
    }
}