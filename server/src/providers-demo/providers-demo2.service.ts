import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvidersDemo2Service {
  getAll() {
    return 'This action returns all providers-demo2';
  }
}
