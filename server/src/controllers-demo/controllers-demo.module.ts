import { Module } from '@nestjs/common';
import { ControllersDemoService } from './controllers-demo.service';
import { ControllersDemoController } from './controllers-demo.controller';

@Module({
  controllers: [ControllersDemoController],
  providers: [ControllersDemoService],
})
export class ControllersDemoModule {}
