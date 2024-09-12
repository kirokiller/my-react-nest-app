import { Injectable } from '@nestjs/common';

@Injectable()
export class ModulesDemo1Service {
  list: number[] = [];

  add(val: number) {
    this.list.push(val);
  }

  get() {
    return this.list;
  }
}
