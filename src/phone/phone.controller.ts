import { Body, Controller, Post } from '@nestjs/common';
import { PhoneDto } from './dto/phone-dto';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post()
  postData(@Body() data: PhoneDto) {
    return this.phoneService.postMethod(data);
  }
}
