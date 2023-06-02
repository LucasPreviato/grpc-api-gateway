import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ValidateResponse } from '../auth.pb';
import { AuthService } from '../auth.service';

@Injectable()
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
    req.body.userId = userId;
    if (status !== HttpStatus.OK) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
