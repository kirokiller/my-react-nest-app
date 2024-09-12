import { Controller, Get } from '@nestjs/common';
import { MiddlewareDemoService } from './middleware-demo.service';

@Controller('middleware-demo')
export class MiddlewareDemoController {
  constructor(private readonly middlewareDemoService: MiddlewareDemoService) {}

  @Get()
  get() {
    return 'This action return middleware-demo';
  }
}
