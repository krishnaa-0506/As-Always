import pino from 'pino';

// Create a logger instance
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

// Error types
export enum ErrorType {
  VALIDATION = 'VALIDATION_ERROR',
  DATABASE = 'DATABASE_ERROR',
  RATE_LIMIT = 'RATE_LIMIT_ERROR',
  AUTH = 'AUTHENTICATION_ERROR',
  GENERATION = 'GENERATION_ERROR',
  SYSTEM = 'SYSTEM_ERROR'
}

interface ErrorLog {
  type: ErrorType;
  message: string;
  stack?: string;
  metadata?: Record<string, any>;
}

export class ErrorLogger {
  static log(error: Error, type: ErrorType, metadata?: Record<string, any>) {
    const errorLog: ErrorLog = {
      type,
      message: error.message,
      stack: error.stack,
      metadata
    };

    logger.error(errorLog);
  }

  static info(message: string, metadata?: Record<string, any>) {
    logger.info({ message, ...metadata });
  }

  static warn(message: string, metadata?: Record<string, any>) {
    logger.warn({ message, ...metadata });
  }
}

export default logger;
