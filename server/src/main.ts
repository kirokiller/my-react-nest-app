import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });

  // TODO 使用 express-session
  // TODO 使用 svg-captcha 添加验证码
  await app.listen(3000);
}
bootstrap();
