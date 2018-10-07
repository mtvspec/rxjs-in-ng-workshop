// #region imports
// tslint:disable:member-ordering
import { Component, OnDestroy } from '@angular/core';
import { loggingObserver, messageObserver } from '../helpers';
// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports
export function play(...args) {

  const array = [10, 20, 30];

  const numbers$ = Rxjs.from(array)

  const observable$ = numbers$.pipe(
    // DISCUSS: Do you know why concatMap and not map?
    op.concatMap(_ => Rxjs.throwError('throwErrorrrrrr'))
  );

  return observable$;

}