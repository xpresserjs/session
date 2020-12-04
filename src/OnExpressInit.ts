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
            const handlerConfig = pluginConfig.get("handlerConfig");

            const KnexSessionStore = connectSessionKnex(session);
            const knexSessionConfig = handlerConfig;

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
                pluginConfig.get('config'),
                {store}
            );

            $.app.use(session(sessionConfig));
        } else {
            /**
             * Check for custom session handler
             */
            let useCustomHandler: string | false = pluginConfig.get('useCustomHandler', false)
            if (useCustomHandler !== false) {
                if (typeof useCustomHandler !== 'string') {
                    $.logErrorAndExit(`Config: {session.useCustomHandler} only accepts false or path to session handler file.`)
                }

                useCustomHandler = $.path.resolve(useCustomHandler);
                if (!$.file.exists(useCustomHandler)) {
                    $.logErrorAndExit(`useCustomHandler File not found: {${useCustomHandler}}`)
                }

                const handler = require(useCustomHandler);
                if (typeof handler !== "function") {
                    $.logErrorAndExit(`useCustomHandler File must return a function: {${useCustomHandler}}`);
                }

                $.app.use(handler(session));
            }
        }
    }

    return next();
}