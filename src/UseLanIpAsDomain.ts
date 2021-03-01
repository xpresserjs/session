import {pluginConfig} from "./config";
import {DollarSign} from "xpresser/types";

export = ($: DollarSign): void => {
    // Get lanIp
    const lanIp: string = $.engineData.get('lanIp');
    // Get config keys
    const useLanIpAsDomainKeys: string[] = pluginConfig.get("useLanIpAsDomainKeys");
    // Hold config update data.
    const configUpdate: Record<string, string> = {};

    // Loop true and set all to lanIp
    for (const key of useLanIpAsDomainKeys) {
        configUpdate[key] = lanIp;
    }

    // Update config
    $.config.set(configUpdate);
}