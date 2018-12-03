import { Action } from "@ngrx/Store";
/**
 * Note: We have used ActionWithPayload for some actions e.g. 
 * CreateToDo since we require payload field, it will hold model class in this case.
 * 
 */
export default interface ActionWithPayload<T> extends Action {
    payload: T;
}