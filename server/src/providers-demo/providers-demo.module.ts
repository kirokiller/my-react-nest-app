import { Module } from '@nestjs/common';
import { ProvidersDemoService } from './providers-demo.service';
import { ProvidersDemoController } from './providers-demo.controller';
import { ProvidersDemo2Service } from './providers-demo2.service';

class mockProvidersDemoService implements ProvidersDemo2Service {
  /* mock implementation
  ...
  */
  getAll(): string {
    return 'This action returns all providers-demo-mock';
  }
}

/* 值提供器: useValue */
// {
//   provide: ProvidersDemo2Service,
//   useClass: mockProvidersDemoService,
// },

/* 非基于类的提供器令牌 */
// {
//   provide: 'CONNECTION',
//   useValue: connection,
// },

/* 类提供器 */
// const configServiceProvider = {
//   provide: ConfigService,
//   useClass:
//     process.env.NODE_ENV === 'development'
//       ? DevelopmentConfigService
//       : ProductionConfigService,
// };

/* 工厂提供器：useFactory */
// const connectionProvider = {
//   provide: 'CONNECTION',
//   useFactory: (optionsProvider: OptionsProvider, optionalProvider?: string) => {
//     const options = optionsProvider.get();
//     return new DatabaseConnection(options);
//   },
//   inject: [OptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
//   //       \_____________/            \__________________/
//   //        This provider              The provider with this
//   //        is mandatory.              token can resolve to `undefined`.
// };

/* 别名提供器：useExisting */
// const loggerAliasProvider = {
//   provide: 'AliasedLoggerService',
//   useExisting: LoggerService,
// };

/* 非基于服务的提供器 */
// const configFactory = {
//   provide: 'CONFIG',
//   useFactory: () => {
//     return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
//   },
// };

@Module({
  controllers: [ProvidersDemoController],
  providers: [
    /** 标准提供器 */
    ProvidersDemoService,
  ],
})
export class ProvidersDemoModule {}
