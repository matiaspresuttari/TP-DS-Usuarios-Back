import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'status:Hola loquito todo correcto, aguante el dortmund';
  }
}
