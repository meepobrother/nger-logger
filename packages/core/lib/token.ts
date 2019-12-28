import { InjectionToken } from "@nger/core";

export const PRE_LOGGER_ID = new InjectionToken<string>(`@nger/logger PRE_LOGGER_ID`)
export const LOGGER_LAST_TIME = new InjectionToken(`@nger/logger LOGGER_LAST_TIME`)
export const LOGGER_SERVICE_NAME = new InjectionToken(`@nger/logger LOGGER_SERVICE_NAME`)
export const LOGGER_MODULE_CHAIN = new InjectionToken(`@nger/logger LOGGER_MODULE_CHAIN`)
export const LOGGER_METHOD_NAME = new InjectionToken(`@nger/logger LOGGER_METHOD_NAME`)
/**
 * 日志Level
 */
export const LOGGER_LEVEL = new InjectionToken<string[]>(`LOGGER_LEVEL`);
