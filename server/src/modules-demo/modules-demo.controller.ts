import { Controller } from '@nestjs/common';
import { ModulesDemoService } from './modules-demo.service';

@Controller('modules-demo')
export class ModulesDemoController {
  constructor(private readonly modulesDemo2Service: ModulesDemoService) {}
}
