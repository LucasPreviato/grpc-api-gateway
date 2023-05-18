/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "providers";

export interface ProviderCategory {
  id: string;
  name: string;
  qualificationRequired: boolean;
  initialQualificationQuestions: InitialQualificationQuestions[];
}

export interface Provider {
  id: string;
  providerId: number;
  name: string;
  providerCategoryId: string;
}

export interface InitialQualificationQuestions {
  id: string;
  providerCategoryId: string;
  question: string;
}

/** requests and responses Provider Category */
export interface GetProviderCategoriesRequest {
}

export interface GetProviderCategoriesResponse {
  providerCategories: ProviderCategory[];
}

export interface CreateProviderCategoryRequest {
  name: string;
  qualificationRequired: boolean;
}

export interface CreateProviderCategoryResponse {
  providerCategory: ProviderCategory | undefined;
}

export interface UpdateProviderCategoryRequest {
  id: string;
  name: string;
  qualificationRequired: boolean;
}

export interface UpdateProviderCategoryResponse {
  providerCategory: ProviderCategory | undefined;
}

export interface GetProvidersRequest {
}

export interface GetProvidersResponse {
  providers: Provider[];
}

export interface GetProviderRequest {
  id: string;
}

export interface GetProviderResponse {
  provider: Provider | undefined;
}

export interface CreateProviderRequest {
  name: string;
  providerCategoryId: string;
}

export interface CreateProviderResponse {
  status: number;
  errors: string[];
  id: string;
}

export interface UpdateProviderRequest {
  id: string;
  name: string;
  providerCategoryId: string;
}

export interface UpdateProviderResponse {
  status: number;
  errors: string[];
  provider: Provider | undefined;
}

export interface GetInitialQualificationQuestionsRequest {
  providerCategoryId: string;
}

export interface GetInitialQualificationQuestionsResponse {
  initialQualificationQuestions: InitialQualificationQuestions[];
}

export interface CreateInitialQualificationQuestionRequest {
  providerCategoryId: string;
  question: string;
}

export interface CreateInitialQualificationQuestionResponse {
  initialQualificationQuestion: InitialQualificationQuestions | undefined;
}

export interface UpdateInitialQualificationQuestionRequest {
  id: string;
  providerCategoryId: string;
  question: string;
}

export interface UpdateInitialQualificationQuestionResponse {
  initialQualificationQuestion: InitialQualificationQuestions | undefined;
}

export const PROVIDERS_PACKAGE_NAME = "providers";

export interface ProviderServiceClient {
  createProvider(request: CreateProviderRequest): Observable<CreateProviderResponse>;

  findAll(request: GetProvidersRequest): Observable<GetProvidersResponse>;

  findOne(request: GetProviderRequest): Observable<GetProviderResponse>;
}

export interface ProviderServiceController {
  createProvider(
    request: CreateProviderRequest,
  ): Promise<CreateProviderResponse> | Observable<CreateProviderResponse> | CreateProviderResponse;

  findAll(
    request: GetProvidersRequest,
  ): Promise<GetProvidersResponse> | Observable<GetProvidersResponse> | GetProvidersResponse;

  findOne(
    request: GetProviderRequest,
  ): Promise<GetProviderResponse> | Observable<GetProviderResponse> | GetProviderResponse;
}

export function ProviderServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createProvider", "findAll", "findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProviderService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProviderService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PROVIDER_SERVICE_NAME = "ProviderService";

export interface ProviderCategoryServiceClient {
  getProviderCategories(request: GetProviderCategoriesRequest): Observable<GetProviderCategoriesResponse>;

  createProviderCategory(request: CreateProviderCategoryRequest): Observable<CreateProviderCategoryResponse>;

  updateProviderCategory(request: UpdateProviderCategoryRequest): Observable<UpdateProviderCategoryResponse>;
}

export interface ProviderCategoryServiceController {
  getProviderCategories(
    request: GetProviderCategoriesRequest,
  ): Promise<GetProviderCategoriesResponse> | Observable<GetProviderCategoriesResponse> | GetProviderCategoriesResponse;

  createProviderCategory(
    request: CreateProviderCategoryRequest,
  ):
    | Promise<CreateProviderCategoryResponse>
    | Observable<CreateProviderCategoryResponse>
    | CreateProviderCategoryResponse;

  updateProviderCategory(
    request: UpdateProviderCategoryRequest,
  ):
    | Promise<UpdateProviderCategoryResponse>
    | Observable<UpdateProviderCategoryResponse>
    | UpdateProviderCategoryResponse;
}

export function ProviderCategoryServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getProviderCategories", "createProviderCategory", "updateProviderCategory"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProviderCategoryService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProviderCategoryService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PROVIDER_CATEGORY_SERVICE_NAME = "ProviderCategoryService";
