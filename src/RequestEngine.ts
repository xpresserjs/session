import type RequestEngine from "xpresser/src/RequestEngine";
import type { XSession } from "../custom-types";

export = (RequestEngineClass: typeof RequestEngine) => {
    return class extends RequestEngineClass {
        session: XSession;
        sessionID: string;

        constructor(req: any, res: any, next?: () => void, route?: any) {
            super(req, res, next, route);
            this.session = req.session ? req.session : {};
            this.sessionID = req.sessionID ? req.sessionID : null;
        }
    };
};
