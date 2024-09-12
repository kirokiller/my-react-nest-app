import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ControllersDemoModule } from './controllers-demo/controllers-demo.module';
import { ProvidersDemoModule } from './providers-demo/providers-demo.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';
import { MiddlewareDemoModule } from './middleware-demo/middleware-demo.module';
import { FiltersDemoModule } from './filters-demo/filters-demo.module';
import { PipesDemoModule } from './pipes-demo/pipes-demo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '211219',
      database: 'demo',
      autoLoadEntities: true, // 自动加载实体，指定该选项后，通过 forFeature() 方法注册的每个实体都将自动添加到配置对象的 entities 数组中。
      synchronize: true, // 是否自动将实体同步到数据库，不应在生产中是使用-否则你可能会丢失生产数据
    }),
    UserModule,
    ControllersDemoModule,
    ProvidersDemoModule,
    ModulesDemoModule,
    MiddlewareDemoModule,
    FiltersDemoModule,
    PipesDemoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
