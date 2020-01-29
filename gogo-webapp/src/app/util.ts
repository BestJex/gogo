import { of, Observable } from 'rxjs';

export class Util {
    /**
     * 处理异常
     * @param callback 需要执行的函数
     * @param result 结果
     */
    public static handleError<T>(
        callback: (...args: any[]) => void,
        result?: T
    ) {
        return (error: any): Observable<T> => {
            callback.apply([])
            return of(result as T)
        };
    }
}