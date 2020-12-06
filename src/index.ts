import {pluginConfig} from "./config";
import type {DollarSign} from "xpresser/types";

export function run(config: any, $: DollarSign) {

    /**
     * Check if plugin is enabled.
     */
    const sessionIsEnabled = pluginConfig.get("enabled");
    if (sessionIsEnabled) {
        /**
         * Register Session on expressInit
         */
        $.on.expressInit(require('./OnExpressInit'))
    }

}