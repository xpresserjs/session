import type RequestEngine from "xpresser/src/RequestEngine";

export = (RequestEngineClass: typeof RequestEngine) => {
    return class extends RequestEngineClass {
        constructor(req: any, res: any, next?: () => void, route?: any) {
            super(req, res, next, route);
            this.session = req.session || {};
        }
    }
}