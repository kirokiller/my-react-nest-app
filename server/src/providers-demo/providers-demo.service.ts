import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvidersDemoService {
  getAll() {
    return 'This action returns all providers-demo';
  }
}
