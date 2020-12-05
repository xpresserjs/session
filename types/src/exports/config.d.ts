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
     * Use Custom Store instead of default plugin.
     * Full, Relative, or Smart Path is expected if not false.
     */
    customStore: boolean;
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
     * Session Configuration settings
     * The session plugin used is `express-session`
     *
     * The configs below are the minimal required configs.
     * Check here for full configuration.
     * https://www.npmjs.com/package/express-session
     */
    sessionConfig: {
        secret: string;
        cookie: {
            path: any;
            domain: any;
            maxAge: number;
        };
        resave: boolean;
        saveUninitialized: boolean;
    };
};
export = _default;
