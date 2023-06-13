import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  Put,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AuthServiceClient,
  AUTH_SERVICE_NAME,
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
} from './auth.pb';
import { Observable } from 'rxjs';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private svc: AuthServiceClient;
  constructor(
    @InjectPinoLogger(AuthController.name) private readonly logger: PinoLogger,

    @Inject(AUTH_SERVICE_NAME)
    private readonly client: ClientGrpc,
  ) {}

  public onModuleInit(): void {
    console.log('AuthController has been initialized.');
    this.svc = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }
  @Post('register')
  private async register(
    @Body() body: RegisterRequest,
  ): Promise<Observable<RegisterResponse>> {
    const response = this.svc.register(body);
    return response;
  }
  @Put('login')
  private async login(
    @Body() body: LoginRequest,
  ): Promise<Observable<LoginResponse>> {
    return this.svc.login(body);
  }
}
