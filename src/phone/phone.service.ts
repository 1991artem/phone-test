import { Injectable } from '@nestjs/common';
import { PhoneDto } from './dto/phone-dto';

@Injectable()
export class PhoneService {
  postMethod(data: PhoneDto) {
    return {
      phone: data.phone,
      date: new Date(),
    };
  }
}
