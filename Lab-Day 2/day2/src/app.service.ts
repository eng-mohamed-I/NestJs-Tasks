import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello From The Other Side  26-8-2024... :)  </h1>';
  }
}
