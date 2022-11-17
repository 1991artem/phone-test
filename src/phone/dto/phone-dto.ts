import { IsNotEmpty } from 'class-validator';

export class PhoneDto {
  @IsNotEmpty()
  readonly phone: string;
}
