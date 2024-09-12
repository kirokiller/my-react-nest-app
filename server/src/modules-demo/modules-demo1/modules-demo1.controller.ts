import { Controller, Get, Param, Post } from '@nestjs/common';
import { ModulesDemo1Service } from './modules-demo1.service';

@Controller('modules-demo1')
export class ModulesDemo1Controller {
  constructor(private readonly modulesDemo1Service: ModulesDemo1Service) {}

  @Post(':id')
  add(@Param('id') id: string) {
    this.modulesDemo1Service.add(+id);
    return `insert ${id} into list`;
  }

  @Get()
  get() {
    return this.modulesDemo1Service.get();
  }
}
