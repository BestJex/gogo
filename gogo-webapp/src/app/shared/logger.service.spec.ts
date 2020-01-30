import { ErrorHandler, ReflectiveInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Logger } from './logger.service';


describe('LoggerService', () => {
  let logSpy: jasmine.Spy;
  let warnSpy: jasmine.Spy;
  let logger: Logger;
  let errorHandler: ErrorHandler;

  beforeEach(() => {
    it('should be created', () => {
      const service: Logger = TestBed.get(Logger);
      expect(service).toBeTruthy();
    });

    logSpy = spyOn(console, 'log');
    warnSpy = spyOn(console, 'warn');

    const injector = ReflectiveInjector.resolveAndCreate([
      Logger,
      { provide: errorHandler, useClass: MockErrorHandler }
    ]);

    logger = injector.get(Logger);
    errorHandler = injector.get(ErrorHandler);
  });

  let params: ['param1', 'param2', 'param3']

  describe('log', () => {
    it('should delegate to console.log', () => {
      logger.log(params);
      expect(logSpy).toHaveBeenCalledWith(params);
    })
  });

  describe('warn', () => {
    it('should delegate to console.warn', () => {
      logger.warn(params);
      expect(warnSpy).toHaveBeenCalledWith(params);
    })
  });

  describe('error', () => {
    it('should delegate to ErrorHandler', () => {
      const err = new Error('some error message');
      logger.error(err);
      expect(errorHandler.handleError).toHaveBeenCalledWith(err);
    })
  })
});

class MockErrorHandler implements ErrorHandler {
  handleError = jasmine.createSpy('handleError')
}