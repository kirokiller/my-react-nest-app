import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('LoggingInterceptor Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`LoggingInterceptor After... ${Date.now() - now}ms`),
        ),
      );
  }
}
