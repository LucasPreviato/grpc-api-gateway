import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { ValidateResponse } from '../auth.pb';

export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService)
    public readonly authService: AuthService,
  ) {}
  public async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> | never {
    const req: Request = context.switchToHttp().getRequest();
    const authorization: string = req.headers['authorization'];
    if (!authorization) {
      throw new UnauthorizedException();
    }
    const bearer: string[] = authorization.split(' ');
    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException();
    }
    const token: string = bearer[1];
    const { status, userId }: ValidateResponse =
      await this.authService.validate(token);
    req.user = userId;
    if (status !== HttpStatus.OK) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
