import { Observable } from 'rxjs';

/**
 * interface for use cases
 *
 * @export
 * @interface IUseCase
 * @typedef {IUseCase}
 */
export interface IUseCase {
  /**
   * execute use case
   *
   * @param {...any[]} args
   * @returns {Observable<any>}
   */
  execute(...args: any[]): Observable<any>;
}
