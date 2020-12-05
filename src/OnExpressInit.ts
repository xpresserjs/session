import {$, pluginConfig} from "./config";

export = (next: () => void): void => {
    const sessionIsEnabled = pluginConfig.get("enabled");

    if (sessionIsEnabled) {
        const lodash = $.modules.lodash();
        const session = require("express-session");
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
            let customStore: string | false = pluginConfig.get('customStore', false)
            if (customStore !== false) {
                if (typeof customStore !== 'string') {
                    $.logErrorAndExit(`Config: {session.customStore} only accepts false or path to custom store definition file.`)
                }

                customStore = $.path.resolve(customStore);
                if (!$.file.exists(customStore)) {
                    $.logErrorAndExit(`customStore File not found: {${customStore}}`)
                }

                const store = require(customStore);
                if (typeof store !== "function") {
                    $.logErrorAndExit(`customStore File must return a function: {${customStore}}`);
                }

                $.app.use(store(session));
            }
        }
    }

    return next();
}