import { PartialType } from '@nestjs/mapped-types';
import { CreateControllersDemoDto } from './create-controllers-demo.dto';

export class UpdateControllersDemoDto extends PartialType(
  CreateControllersDemoDto,
) {}
