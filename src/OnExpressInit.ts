import {$, pluginConfig} from "./config";
import session = require("express-session");
import type {XSessionCustomStore} from "../custom-types";

export = (next: () => void): void => {

    const lodash = $.modules.lodash();
    const useDefault = pluginConfig.get("useDefault");

    /**
     * Session handled by Knex
     * Enabled on default
     */
    if (useDefault) {
        const connectSessionKnex = require("connect-session-knex");
        const storeConfig = pluginConfig.get("storeConfig");

        const KnexSessionStore = connectSessionKnex(session);
        const knexSessionConfig = storeConfig;

        const sessionFilePath = knexSessionConfig.connection.filename;
        if (sessionFilePath && !$.file.exists(sessionFilePath)) {
            $.file.makeDirIfNotExist(sessionFilePath, true);
        }

        const store = new KnexSessionStore({
            knex: require("knex")(knexSessionConfig),
            tablename: "sessions",
        });

        const sessionConfig = lodash.extend(
            {},
            pluginConfig.get('sessionConfig'),
            {store}
        );

        $.app.use(session(sessionConfig));
    } else {
        /**
         * Check for custom session store
         */
        let customStore: XSessionCustomStore | false = pluginConfig.get('customStore', false)
        if (customStore !== false) {
            if (typeof customStore !== 'function') {
                $.logErrorAndExit(`Config: {session.customStore} only accepts false or function.`)
            }

            $.app.use(customStore(session));
        }
    }
    return next();
}