import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  ProviderServiceClient,
  PROVIDER_SERVICE_NAME,
  CreateProviderRequest,
  CreateProviderResponse,
  GetProviderResponse,
  GetProvidersResponse,
} from './providers.pb';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Observable } from 'rxjs';

@Controller('providers')
export class ProvidersController implements OnModuleInit {
  constructor(
    private svc: ProviderServiceClient,
    @Inject(PROVIDER_SERVICE_NAME)
    private readonly client: ClientGrpc,
  ) {}
  onModuleInit() {
    console.log('ProvidersController has been initialized.');
    this.svc = this.client.getService<ProviderServiceClient>(
      PROVIDER_SERVICE_NAME,
    );
  }
  @Post()
  @UseGuards(AuthGuard)
  private async createProvider(
    @Body() body: CreateProviderRequest,
  ): Promise<Observable<CreateProviderResponse>> {
    return this.svc.createProvider(body);
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  private async findOne(
    @Param('id') id: string,
  ): Promise<Observable<GetProviderResponse>> {
    return this.svc.findOne({ id });
  }

  @Get()
  @UseGuards(AuthGuard)
  private async findAll(): Promise<Observable<GetProvidersResponse>> {
    return this.svc.findAll({});
  }
}
