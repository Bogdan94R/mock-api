import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('api/auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  public async login(@Body() login: { email: string; password: string }) {
    return {
      success: true,
      data: {
        token: {
          key: this.jwtService.sign({
            email: login.email,
            password: login.password,
          }),
        },
      },
    };
  }
}
