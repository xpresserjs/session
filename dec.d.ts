import {XSessionCustomData} from "./custom-types";

declare module "xpresser/types/http" {
    interface Http {
        session?: XSessionCustomData
        sessionID?: string
    }
}

