import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateEquipamentRequest,
  CreateEquipamentResponse,
  EQUIPAMENT_SERVICE_NAME,
  EquipamentServiceClient,
} from './equipaments.pb';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Observable } from 'rxjs';

@Controller('equipaments')
export class EquipamentsController implements OnModuleInit {
  private svc: EquipamentServiceClient;
  constructor(
    @Inject(EQUIPAMENT_SERVICE_NAME)
    private readonly client: ClientGrpc,
  ) {}

  public onModuleInit(): void {
    this.svc = this.client.getService<EquipamentServiceClient>(
      EQUIPAMENT_SERVICE_NAME,
    );
  }

  @Post('create')
  @UseGuards(AuthGuard)
  private async create(
    @Body() body: CreateEquipamentRequest,
  ): Promise<Observable<CreateEquipamentResponse>> {
    const response = await this.svc.createEquipament(body);
    return response;
  }
}
