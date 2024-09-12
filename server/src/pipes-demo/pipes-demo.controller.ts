import { Controller } from '@nestjs/common';
import { PipesDemoService } from './pipes-demo.service';

@Controller('pipes-demo')
export class PipesDemoController {
  constructor(private readonly pipesDemoService: PipesDemoService) {}
}
