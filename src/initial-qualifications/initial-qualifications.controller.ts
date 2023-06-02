import {
  Controller,
  Inject,
  OnModuleInit,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  InitialQualificationsClient,
  INITIAL_QUALIFICATIONS_SERVICE_NAME,
  CreateInitialQualificationResponse,
  CreateInitialQualificationRequest,
} from './initial-qualifications.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Controller('initial-qualifications')
export class InitialQualificationsController implements OnModuleInit {
  private svc: InitialQualificationsClient;
  constructor(
    @Inject(INITIAL_QUALIFICATIONS_SERVICE_NAME)
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    console.log('InitialQualificationsController has been initialized.');
    this.svc = this.client.getService<InitialQualificationsClient>(
      INITIAL_QUALIFICATIONS_SERVICE_NAME,
    );
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createInitialQualifications(
    @Req() req: Request,
  ): Promise<Observable<CreateInitialQualificationResponse>> {
    const body: CreateInitialQualificationRequest = req.body;
    body.userId = <string>req.body.userId;
    return this.svc.createInitialQualification(body);
  }
}
