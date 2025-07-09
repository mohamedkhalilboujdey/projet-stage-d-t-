import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginUserDTO } from 'src/users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto); // hash dans users.service.ts
  }

  @Post('login')
  async login(@Body() userLoginDto : LoginUserDTO) {
    const user = await this.authService.validateUser(userLoginDto.email, userLoginDto.password);
    if (!user) throw new HttpException('Invalid credentials',HttpStatus.UNAUTHORIZED);
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
