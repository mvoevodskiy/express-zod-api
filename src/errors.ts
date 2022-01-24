import { Method } from "./method";

export class RoutingError extends Error {}

export class DependsOnMethodError extends RoutingError {}

export class OpenAPIError extends Error {
  constructor(
    message: string,
    public readonly path: string,
    public readonly method: Method
  ) {
    super(message);
  }
}

export class ResultHandlerError extends Error {
  protected readonly originalError?: Error;

  constructor(message: string, originalError?: Error | null) {
    super(message);
    this.originalError = originalError || undefined;
  }

  public hasOriginalError() {
    return this.originalError !== undefined;
  }

  public getOriginalErrorMessage() {
    return this.originalError ? this.originalError.message : undefined;
  }
}
