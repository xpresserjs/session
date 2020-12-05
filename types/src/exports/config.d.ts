import { SessionOptions } from "express-session";
import { DollarSign } from "xpresser/types";
declare const _default: ($: DollarSign) => {
    /**
     * Enable this plugin
     */
    enabled: boolean;
    /**
     * Use Default Store
     */
    useDefault: boolean;
    /**
     * Session Configuration settings
     * The session plugin used is `express-session`
     *
     * The configs below are the minimal required configs.
     * Check here for full configuration.
     * https://www.npmjs.com/package/express-session
     */
    sessionConfig: SessionOptions;
    /**
     * Default Store used: `connect-session-knex`
     * The default settings uses an sqlite file.
     *
     * You can also check other SQL configs of saving your session in databases
     * like PostgreSQL, MySQL, MariaDB, MSSQL, Oracle or SQLite3
     *
     * See Configuration here
     * https://www.npmjs.com/package/connect-session-knex
     */
    storeConfig: {
        client: string;
        connection: {
            filename: string;
        };
        useNullAsDefault: boolean;
    };
    /**
     * Use Custom Store instead of default store.
     * This option will only be checked if useDefault is false.
     */
    customStore(use: (options?: SessionOptions | undefined) => any): any;
};
export = _default;
