export type ILogHandler = (type: string, payload: string | undefined, silent?: boolean) => void;

export interface ILoggerUseCases {
  disable(): void;

  enable(): void;

  onInit(logHandler: ILogHandler): void;
}

export interface ILoggerServices {
  disable(): void;

  enable(): void;

  error(payload?: unknown, silent?: boolean): void;

  info(payload?: unknown, silent?: boolean): void;

  log(payload?: unknown, silent?: boolean): void;

  onInit(logHandler: ILogHandler): void;
}
