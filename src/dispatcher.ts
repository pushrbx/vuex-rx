import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Epic } from './createEpic'
import { ActionsObservable } from './ActionObservable'
import { ActionPayload } from './reduxLike'
import { Observable } from 'rxjs/Observable'

export class Dispatcher<S> extends BehaviorSubject<Epic<any, S>> {
    static INIT: string = '@pushedx/vuex-rx'

    constructor() {
        super( Dispatcher.initialEpic )
    }

    public static initialEpic(actions$: ActionsObservable<ActionPayload<any>>): Observable<any> {
        return actions$.ofType(Dispatcher.INIT)
    }

    dispatch(epic: Epic<any, S>): void {
        this.next(epic)
    }

    complete() {
        // noop
    }
}
