/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "initial_qualifications";

export interface InitialQualification {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  questions: string[];
  answers: string[];
}

export interface GetInitialQualificationsRequest {
}

export interface GetInitialQualificationsResponse {
  initialQualifications: InitialQualification[];
}

export interface GetInitialQualificationRequest {
  id: string;
}

export interface GetInitialQualificationResponse {
  initialQualification: InitialQualification | undefined;
}

export interface CreateInitialQualificationRequest {
  name: string;
  description: string;
  type: string;
  status: string;
  questions: string[];
}

export interface CreateInitialQualificationResponse {
  initialQualification: InitialQualification | undefined;
}

export interface UpdateInitialQualificationsRequest {
  initialQualifications: InitialQualification[];
}

export interface UpdateInitialQualificationsResponse {
  initialQualifications: InitialQualification[];
}

export interface DeleteInitialQualificationsRequest {
  ids: string[];
}

export interface DeleteInitialQualificationsResponse {
  ids: string[];
}

export const INITIAL_QUALIFICATIONS_PACKAGE_NAME = "initial_qualifications";

export interface InitialQualificationsClient {
  getInitialQualifications(request: GetInitialQualificationsRequest): Observable<GetInitialQualificationsResponse>;

  getInitialQualification(request: GetInitialQualificationRequest): Observable<GetInitialQualificationResponse>;

  createInitialQualification(
    request: CreateInitialQualificationRequest,
  ): Observable<CreateInitialQualificationResponse>;

  updateInitialQualifications(
    request: UpdateInitialQualificationsRequest,
  ): Observable<UpdateInitialQualificationsResponse>;

  deleteInitialQualifications(
    request: DeleteInitialQualificationsRequest,
  ): Observable<DeleteInitialQualificationsResponse>;
}

export interface InitialQualificationsController {
  getInitialQualifications(
    request: GetInitialQualificationsRequest,
  ):
    | Promise<GetInitialQualificationsResponse>
    | Observable<GetInitialQualificationsResponse>
    | GetInitialQualificationsResponse;

  getInitialQualification(
    request: GetInitialQualificationRequest,
  ):
    | Promise<GetInitialQualificationResponse>
    | Observable<GetInitialQualificationResponse>
    | GetInitialQualificationResponse;

  createInitialQualification(
    request: CreateInitialQualificationRequest,
  ):
    | Promise<CreateInitialQualificationResponse>
    | Observable<CreateInitialQualificationResponse>
    | CreateInitialQualificationResponse;

  updateInitialQualifications(
    request: UpdateInitialQualificationsRequest,
  ):
    | Promise<UpdateInitialQualificationsResponse>
    | Observable<UpdateInitialQualificationsResponse>
    | UpdateInitialQualificationsResponse;

  deleteInitialQualifications(
    request: DeleteInitialQualificationsRequest,
  ):
    | Promise<DeleteInitialQualificationsResponse>
    | Observable<DeleteInitialQualificationsResponse>
    | DeleteInitialQualificationsResponse;
}

export function InitialQualificationsControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getInitialQualifications",
      "getInitialQualification",
      "createInitialQualification",
      "updateInitialQualifications",
      "deleteInitialQualifications",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("InitialQualifications", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("InitialQualifications", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const INITIAL_QUALIFICATIONS_SERVICE_NAME = "InitialQualifications";
