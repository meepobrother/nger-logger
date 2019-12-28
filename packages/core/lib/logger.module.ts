import { LoggerImpl } from "./logger";
import { Module, Logger, Injector, ModuleWithProviders } from "@nger/core";
import { LOGGER_MODULE_CHAIN } from "./token";
export function getNameChain(injector: Injector) {
  if (injector.scope === "root") {
    return ``;
  }
  let chain: string = ``;
  if (injector.parent && injector.parent.scope !== "root") {
    chain += getNameChain(injector.parent) + ".";
  }
  chain +=
    typeof injector.scope === "string"
      ? injector.scope
      : (injector.scope as any).name;
  return chain;
}
@Module({
  providers: [
    {
      provide: Logger,
      useFactory: (injector: Injector) => new LoggerImpl(injector),
      deps: [Injector]
    }
  ]
})
export class LoggerModule {
  static forFeature(): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LOGGER_MODULE_CHAIN,
          useFactory: getNameChain,
          deps: [Injector]
        }
      ]
    };
  }
}
