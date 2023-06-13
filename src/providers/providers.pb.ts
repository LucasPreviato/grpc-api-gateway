/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "providers";

export interface ProviderCategory {
  id: string;
  laboratoryId: number;
  providerCategoryId: number;
  name: string;
  critical: boolean;
  qualificationRequired: boolean;
  initialQualificationQuestions: InitialQualificationQuestions[];
  errors: string[];
}

export interface Provider {
  id: string;
  laboratoryId: number;
  providerCategoryId: number;
  name: string;
  critical: boolean;
  isQualificated: boolean;
  errors: string[];
}

export interface InitialQualificationQuestions {
  id: string;
  laboratoryId: number;
  providerCategoryId: number;
  question: string;
  errors: string[];
}

export interface GetProviderCategoriesRequest {
}

export interface GetProviderCategoriesResponse {
  providerCategories: ProviderCategory[];
}

export interface GetProviderCategoryRequest {
  id: string;
}

export interface GetProviderCategoryResponse {
  providerCategory: ProviderCategory | undefined;
}

export interface CreateProviderCategoryRequest {
  laboratoryId: number;
  name: string;
  critical: boolean;
  qualificationRequired: boolean;
  initialQualificationQuestions: InitialQualificationQuestions[];
}

export interface CreateProviderCategoryResponse {
  providerCategory: ProviderCategory | undefined;
}

export interface UpdateProviderCategoryRequest {
  id: string;
  laboratoryId: number;
  name: string;
  critical: boolean;
  qualificationRequired: boolean;
  initialQualificationQuestions: InitialQualificationQuestions[];
}

export interface UpdateProviderCategoryResponse {
  providerCategory: ProviderCategory | undefined;
}

export interface DeleteProviderCategoryRequest {
  id: string;
}

export interface DeleteProviderCategoryResponse {
  providerCategory: ProviderCategory | undefined;
}

export interface GetProvidersRequest {
}

export interface GetProvidersResponse {
  providers: Provider[];
  errors: string[];
  status: number;
}

export interface GetProviderRequest {
  id: string;
}

export interface GetProviderResponse {
  provider: Provider | undefined;
  errors: string[];
  status: number;
}

export interface CreateProviderRequest {
  laboratoryId: number;
  providerCategoryId: number;
  name: string;
  critical: boolean;
}

export interface CreateProviderResponse {
  id: string;
  errors: string[];
  status: number;
}

export interface UpdateProviderRequest {
  id: string;
  laboratoryId: number;
  providerCategoryId: number;
  name: string;
  critical: boolean;
}

export interface UpdateProviderResponse {
  provider: Provider | undefined;
  errors: string[];
  status: number;
}

export interface DeleteProviderRequest {
  id: string;
}

export interface DeleteProviderResponse {
  provider: Provider | undefined;
  errors: string[];
  status: number;
}

export interface GetInitialQualificationQuestionsRequest {
}

export interface GetInitialQualificationQuestionsResponse {
  initialQualificationQuestions: InitialQualificationQuestions[];
}

export interface GetInitialQualificationQuestionRequest {
  id: string;
}

export interface GetInitialQualificationQuestionResponse {
  initialQualificationQuestion: InitialQualificationQuestions | undefined;
}

export interface CreateInitialQualificationQuestionRequest {
  laboratoryId: number;
  providerCategoryId: number;
  question: string;
}

export interface CreateInitialQualificationQuestionResponse {
  initialQualificationQuestion: InitialQualificationQuestions | undefined;
}

export interface UpdateInitialQualificationQuestionRequest {
  id: string;
  laboratoryId: number;
  providerCategoryId: number;
  question: string;
}

export interface UpdateInitialQualificationQuestionResponse {
  initialQualificationQuestion: InitialQualificationQuestions | undefined;
}

export interface DeleteInitialQualificationQuestionRequest {
  id: string;
}

export interface DeleteInitialQualificationQuestionResponse {
  initialQualificationQuestion: InitialQualificationQuestions | undefined;
}

export const PROVIDERS_PACKAGE_NAME = "providers";

export interface ProviderCategoryServiceClient {
  getAll(request: GetProviderCategoriesRequest): Observable<GetProviderCategoriesResponse>;

  findOne(request: GetProviderCategoryRequest): Observable<GetProviderCategoryResponse>;

  create(request: CreateProviderCategoryRequest): Observable<CreateProviderCategoryResponse>;

  update(request: UpdateProviderCategoryRequest): Observable<UpdateProviderCategoryResponse>;

  delete(request: DeleteProviderCategoryRequest): Observable<DeleteProviderCategoryResponse>;
}

export interface ProviderCategoryServiceController {
  getAll(
    request: GetProviderCategoriesRequest,
  ): Promise<GetProviderCategoriesResponse> | Observable<GetProviderCategoriesResponse> | GetProviderCategoriesResponse;

  findOne(
    request: GetProviderCategoryRequest,
  ): Promise<GetProviderCategoryResponse> | Observable<GetProviderCategoryResponse> | GetProviderCategoryResponse;

  create(
    request: CreateProviderCategoryRequest,
  ):
    | Promise<CreateProviderCategoryResponse>
    | Observable<CreateProviderCategoryResponse>
    | CreateProviderCategoryResponse;

  update(
    request: UpdateProviderCategoryRequest,
  ):
    | Promise<UpdateProviderCategoryResponse>
    | Observable<UpdateProviderCategoryResponse>
    | UpdateProviderCategoryResponse;

  delete(
    request: DeleteProviderCategoryRequest,
  ):
    | Promise<DeleteProviderCategoryResponse>
    | Observable<DeleteProviderCategoryResponse>
    | DeleteProviderCategoryResponse;
}

export function ProviderCategoryServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAll", "findOne", "create", "update", "delete"];
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

export interface ProviderServiceClient {
  findAll(request: GetProvidersRequest): Observable<GetProvidersResponse>;

  findOne(request: GetProviderRequest): Observable<GetProviderResponse>;

  create(request: CreateProviderRequest): Observable<CreateProviderResponse>;

  update(request: UpdateProviderRequest): Observable<UpdateProviderResponse>;

  delete(request: DeleteProviderRequest): Observable<DeleteProviderResponse>;
}

export interface ProviderServiceController {
  findAll(
    request: GetProvidersRequest,
  ): Promise<GetProvidersResponse> | Observable<GetProvidersResponse> | GetProvidersResponse;

  findOne(
    request: GetProviderRequest,
  ): Promise<GetProviderResponse> | Observable<GetProviderResponse> | GetProviderResponse;

  create(
    request: CreateProviderRequest,
  ): Promise<CreateProviderResponse> | Observable<CreateProviderResponse> | CreateProviderResponse;

  update(
    request: UpdateProviderRequest,
  ): Promise<UpdateProviderResponse> | Observable<UpdateProviderResponse> | UpdateProviderResponse;

  delete(
    request: DeleteProviderRequest,
  ): Promise<DeleteProviderResponse> | Observable<DeleteProviderResponse> | DeleteProviderResponse;
}

export function ProviderServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findAll", "findOne", "create", "update", "delete"];
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

export interface InitialQualificationQuestionsServiceClient {
  getAll(request: GetInitialQualificationQuestionsRequest): Observable<GetInitialQualificationQuestionsResponse>;

  findOne(request: GetInitialQualificationQuestionRequest): Observable<GetInitialQualificationQuestionResponse>;

  create(request: CreateInitialQualificationQuestionRequest): Observable<CreateInitialQualificationQuestionResponse>;

  update(request: UpdateInitialQualificationQuestionRequest): Observable<UpdateInitialQualificationQuestionResponse>;

  delete(request: DeleteInitialQualificationQuestionRequest): Observable<DeleteInitialQualificationQuestionResponse>;
}

export interface InitialQualificationQuestionsServiceController {
  getAll(
    request: GetInitialQualificationQuestionsRequest,
  ):
    | Promise<GetInitialQualificationQuestionsResponse>
    | Observable<GetInitialQualificationQuestionsResponse>
    | GetInitialQualificationQuestionsResponse;

  findOne(
    request: GetInitialQualificationQuestionRequest,
  ):
    | Promise<GetInitialQualificationQuestionResponse>
    | Observable<GetInitialQualificationQuestionResponse>
    | GetInitialQualificationQuestionResponse;

  create(
    request: CreateInitialQualificationQuestionRequest,
  ):
    | Promise<CreateInitialQualificationQuestionResponse>
    | Observable<CreateInitialQualificationQuestionResponse>
    | CreateInitialQualificationQuestionResponse;

  update(
    request: UpdateInitialQualificationQuestionRequest,
  ):
    | Promise<UpdateInitialQualificationQuestionResponse>
    | Observable<UpdateInitialQualificationQuestionResponse>
    | UpdateInitialQualificationQuestionResponse;

  delete(
    request: DeleteInitialQualificationQuestionRequest,
  ):
    | Promise<DeleteInitialQualificationQuestionResponse>
    | Observable<DeleteInitialQualificationQuestionResponse>
    | DeleteInitialQualificationQuestionResponse;
}

export function InitialQualificationQuestionsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAll", "findOne", "create", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("InitialQualificationQuestionsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("InitialQualificationQuestionsService", method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const INITIAL_QUALIFICATION_QUESTIONS_SERVICE_NAME = "InitialQualificationQuestionsService";
