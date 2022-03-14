import { Injectable, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import RequestLogSchema from 'src/schemas/RequestLogSchema';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
    
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const _path = context.switchToHttp().getRequest().url;
        const _method = context.switchToHttp().getRequest().method;
        const _date = (new Date()).toISOString();
        return next.handle().pipe(tap((response) => {
            const rlSchema = new RequestLogSchema({
                date: new Date(),  
                path: _path,
                method: _method,
                metadata: response
              });
              rlSchema.save();
            //console.log(`[${_date}] Path: ${_path} Method: ${_method} : ${JSON.stringify(response)} `);
        }));
    }
}