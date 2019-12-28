import {
  corePlatform,
  Module,
  Logger,
  PLATFORM_NAME
} from "@nger/core";
import { REQUEST_ID } from "@nger/http";
import {
  LoggerModule,
  PRE_LOGGER_ID,
  LOGGER_METHOD_NAME,
  LOGGER_LAST_TIME
} from "../lib";

@Module({
  providers: [
    {
      provide: PRE_LOGGER_ID,
      useValue: `12345`
    },
    {
      provide: REQUEST_ID,
      useValue: `23456`
    },
    {
      provide: PLATFORM_NAME,
      useValue: "demo"
    },
    {
      provide: LOGGER_METHOD_NAME,
      useValue: `demo`
    },
    {
      provide: LOGGER_LAST_TIME,
      useValue: new Date()
    }
  ],
  imports: [LoggerModule.forFeature()]
})
export class AppModule {}

corePlatform()
  .bootstrapModule(AppModule)
  .then(res => {
    const ref = res.getModuleRef(LoggerModule)
    const logger = ref.injector.get(Logger);
    debugger;
  });
