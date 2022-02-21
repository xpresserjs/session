/**
 * --- Import plugin namespace.
 * --- Import plugin pluginConfig object.
 */
import {getInstance, InXpresserError} from "xpresser";
import type {DollarSign} from "xpresser/types";
import {namespace} from "../use.json"
import importableConfig = require('./exports/config');
import slugify from "slugify";

export const $ = getInstance();
// Convert pluginConfig to collection.
export const pluginConfig = $.objectCollection(importableConfig($));

// Add namespace to plugin pluginConfig (optional but recommended)
pluginConfig.set('namespace', namespace);

// Try to get session from configs/session.(js|ts)
// File extension was excluded to allow require guess the file.
// Just in-case it's typescript.
const configPath = $.path.configs('session');
let configFn!: ($: DollarSign) => Record<string, any>;
let foundConfigFile = false;

try {
    configFn = require(configPath);
    foundConfigFile = true;
} catch (err) {
}

// Throw Error if config file does not return a function.
if (foundConfigFile && typeof configFn !== "function") {
    throw new InXpresserError("Session Config file must return a function.");
}

if (foundConfigFile) {
    /**
     * Merge with user defined values.
     */
    pluginConfig.merge(configFn($));
}

// Check if slugifyName is enabled.
if (pluginConfig.exists(['sessionConfig.name', 'slugifyName'])) {
    pluginConfig.unset('slugifyName');

    // slugify name.
    pluginConfig.set('sessionConfig.name', slugify(
        pluginConfig.get('sessionConfig.name'),
        {lower: true, trim: true}
    ));
}
