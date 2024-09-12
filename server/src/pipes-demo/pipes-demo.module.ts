import { Module } from '@nestjs/common';
import { PipesDemoService } from './pipes-demo.service';
import { PipesDemoController } from './pipes-demo.controller';

/** TODO pipes */
@Module({
  controllers: [PipesDemoController],
  providers: [PipesDemoService],
})
export class PipesDemoModule {}
