import {DollarSign} from "xpresser/types";

export = ($: DollarSign) => ({

    /**
     * Enable this plugin
     */
    enabled: true,

    /**
     * Use Default Plugin
     * // Talk about default plugin here.
     */
    useDefault: true,

    /**
     * Use Custom Handler instead of default plugin.
     * Full, Relative, or Smart Path is expected if not false.
     */
    customHandler: false,

    /**
     * Default Handler used: `connect-session-knex`
     * The default settings uses an sqlite file.
     *
     * You can also check other SQL configs of saving your session in databases
     * like PostgreSQL, MySQL, MariaDB, MSSQL, Oracle or SQLite3
     *
     * See Configuration here
     * https://www.npmjs.com/package/connect-session-knex
     */
    handlerConfig: {
        client: "sqlite3",
        connection: {
            filename: $.path.frameworkStorageFolder("sessions.sqlite"),
        },
        useNullAsDefault: true,
    },


    /**
     * Session Configuration settings
     * The session plugin used is `express-session`
     *
     * The configs below are the minimal required configs.
     * Check here for full configuration.
     * https://www.npmjs.com/package/express-session
     */
    config: {
        secret: "!XpresserSecretKey!",
        cookie: {
            path: $.config.get('server.root'),
            domain: $.config.get('server.domain'),
            maxAge: 5000 * 60 * 24,
        },
        resave: true,
        saveUninitialized: true,
    },
});