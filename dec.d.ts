import "xpresser/types/http";
import {XSession} from "./custom-types";

declare module "xpresser/types/http" {
    interface Http {
        session?: XSession
        sessionID?: string
    }
}

