import { Controller } from '@nestjs/common';
import { FiltersDemoService } from './filters-demo.service';

@Controller('filters-demo')
export class FiltersDemoController {
  constructor(private readonly filtersDemoService: FiltersDemoService) {}
}
