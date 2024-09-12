import { Injectable } from '@nestjs/common';
import { CreateControllersDemoDto } from './dto/create-controllers-demo.dto';
import { UpdateControllersDemoDto } from './dto/update-controllers-demo.dto';

// @Injectable() 装饰器附加元数据，该元数据声明该Service 是可由 Nest IoC 容器管理的类
@Injectable()
export class ControllersDemoService {
  create(createControllersDemoDto: CreateControllersDemoDto) {
    return 'This action adds a new controllersDemo';
  }

  findAll() {
    return `This action returns all controllersDemo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controllersDemo`;
  }

  update(id: number, updateControllersDemoDto: UpdateControllersDemoDto) {
    return `This action updates a #${id} controllersDemo`;
  }

  remove(id: number) {
    return `This action removes a #${id} controllersDemo`;
  }
}
