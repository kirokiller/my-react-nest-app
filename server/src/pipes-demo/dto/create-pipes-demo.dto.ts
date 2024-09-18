import { IsString } from 'class-validator';

export class CreatePipesDemoDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavors: string[];
}
