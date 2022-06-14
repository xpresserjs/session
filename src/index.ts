import { pluginConfig } from "./config";
import type { DollarSign } from "xpresser/types";

export function run(config: any, $: DollarSign) {
    /**
     * Check if plugin is enabled.
     */
    const sessionIsEnabled = pluginConfig.get("enabled");
    if (sessionIsEnabled) {
        /**
         * Check if useLanIpAsDomain is enabled
         */
        const useLanIpAsDomain = pluginConfig.get("useLanIpAsDomain");
        if (useLanIpAsDomain && $.engineData.has("lanIp")) {
            const UseLanIpAsDomain = require("./UseLanIpAsDomain");
            UseLanIpAsDomain($);
        }

        /**
         * Register Session on expressInit
         */
        $.on.expressInit(require("./OnExpressInit"));
    }
}
