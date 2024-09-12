import { Module } from '@nestjs/common';
import { FiltersDemoService } from './filters-demo.service';
import { FiltersDemoController } from './filters-demo.controller';

/* TODO 异常过滤器 https://docs.nestjs.com/exception-filters#binding-filters */
@Module({
  controllers: [FiltersDemoController],
  providers: [FiltersDemoService],
})
export class FiltersDemoModule {}
