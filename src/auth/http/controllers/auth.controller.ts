import { IAuthService } from '@/auth/features/contracts/auth.service.interface';
import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthRequest } from '@/auth/utils/models/auth-request.interface';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '@/common/utils/decorators/is-public.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    @Inject('IAuthService')
    private readonly authService: IAuthService,
  ) {}

  @IsPublic()
  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    schema: {
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  async signIn(@Request() req: AuthRequest) {
    return this.authService.signIn(req.user);
  }
}
