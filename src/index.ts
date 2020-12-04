import {$} from "./config";

export function run(config: any) {

    /**
     * Register Session on expressInit
     */
    $.on.expressInit(require('./OnExpressInit'))
}