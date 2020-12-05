import {$, pluginConfig} from "./config";

export function run() {

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