import type RequestEngine from "xpresser/src/RequestEngine";
import type { XSession } from "../custom-types";
declare const _default: (RequestEngineClass: typeof RequestEngine) => {
    new (req: any, res: any, next?: (() => void) | undefined, route?: any): {
        session: XSession;
        sessionID: string;
        req: import("xpresser/types/http").Http.Request;
        res: import("xpresser/types/http").Http.Response;
        $query: import("object-collection");
        $body: import("object-collection");
        params: Record<string, any>;
        store: import("object-collection");
        route: {
            name: string;
            method: string;
            controller: string;
        };
        customRenderer: (...args: any[]) => string;
        $instance(): import("xpresser/types").DollarSign;
        $<K extends "exit" | "path" | "use" | "base64" | "file" | "http" | "router" | "options" | "controller" | "env" | "boot" | "config" | "engineData" | "store" | "helpers" | "fn" | "utils" | "modules" | "app" | "https" | "routerEngine" | "events" | "on" | "initializeTypescript" | "isTypescript" | "objectCollection" | "log" | "logCalmly" | "logDeprecated" | "logInfo" | "logSuccess" | "logWarning" | "logIfNotConsole" | "logAndExit" | "logError" | "logErrorAndExit" | "logPerLine" | "ifConsole" | "ifIsConsole" | "ifNotConsole" | "handler">(key: K): import("xpresser/types").DollarSign[K];
        newError(): import("xpresser/src/ErrorEngine");
        next(): void;
        send(body: any): import("xpresser/types/http").Http.Response;
        status(code: number): any;
        query(key?: string | undefined, $default?: any): any;
        body(key?: string | undefined, $default?: any): any;
        hasParam(param: string): boolean;
        hasParams(params: string[]): boolean;
        all(pluck?: any[]): any;
        toApi(data?: any, proceed?: boolean, status?: number | undefined): import("xpresser/types/http").Http.Response;
        toApiFalse(data?: object, status?: number): import("xpresser/types/http").Http.Response;
        sayToApi(message: string, proceed?: boolean, status?: number): import("xpresser/types/http").Http.Response;
        sayToApiFalse(message: string, proceed?: boolean, status?: number): import("xpresser/types/http").Http.Response;
        redirect(path?: string): any;
        redirectBack(): any;
        redirectToRoute(route: string, keys?: any[] | undefined, query?: boolean | object | undefined, includeUrl?: boolean | undefined): any;
        viewData(file: string): any;
        view(file: string, data?: {}, fullPath?: boolean, useInternalEjs?: boolean): any;
        renderView(...args: any[]): any;
        render(...args: any[]): any;
        renderViewFromEngine(file: string, data?: any): any;
        with(data: any, value?: null): any;
        withOld(): any;
        end(): string;
    };
};
export = _default;
