/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "equipament";

export interface EquipamentData {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  serialNumber: string;
  location: string;
  observation: string;
}

export interface GetEquipamentRequest {
  id: number;
}

export interface GetEquipamentResponse {
  status: number;
  error: string[];
  equipament: EquipamentData | undefined;
}

export interface CreateEquipamentRequest {
  name: string;
  description: string;
  brand: string;
  model: string;
  serialNumber: string;
  location: string;
  observation: string;
}

export interface CreateEquipamentResponse {
  status: number;
  errors: string[];
  id: number;
}

export const EQUIPAMENT_PACKAGE_NAME = "equipament";

export interface EquipamentServiceClient {
  getEquipament(request: GetEquipamentRequest): Observable<GetEquipamentResponse>;

  /** rpc ListEquipament (ListEquipamentRequest) returns (stream ListEquipamentResponse) {} */

  createEquipament(request: CreateEquipamentRequest): Observable<CreateEquipamentResponse>;
}

export interface EquipamentServiceController {
  getEquipament(
    request: GetEquipamentRequest,
  ): Promise<GetEquipamentResponse> | Observable<GetEquipamentResponse> | GetEquipamentResponse;

  /** rpc ListEquipament (ListEquipamentRequest) returns (stream ListEquipamentResponse) {} */

  createEquipament(
    request: CreateEquipamentRequest,
  ): Promise<CreateEquipamentResponse> | Observable<CreateEquipamentResponse> | CreateEquipamentResponse;
}

export function EquipamentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getEquipament", "createEquipament"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("EquipamentService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("EquipamentService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const EQUIPAMENT_SERVICE_NAME = "EquipamentService";
