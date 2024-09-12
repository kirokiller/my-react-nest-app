import { Controller, Get, Inject } from '@nestjs/common';
import { ProvidersDemoService } from './providers-demo.service';
import { ProvidersDemo2Service } from './providers-demo2.service';

@Controller('providers-demo')
export class ProvidersDemoController {
  constructor(private readonly providersDemoService: ProvidersDemoService) {}

  @Get()
  findAll(): string {
    return 'providers-demo';
  }
}
