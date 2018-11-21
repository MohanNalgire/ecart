import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartServiceURL='http://localhost:3000/cartProducts';

  constructor(
    private httpclient:HttpClient
  ) { }

  getCartProducts():Observable<any>{
    return this.httpclient.get(this.cartServiceURL);   
  }

  removeCartItem(cartProductId):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpclient.delete<any>(`${this.cartServiceURL}/${cartProductId}`,httpOptions)
    .pipe(
      tap(_ => console.log(`deleted product id=${cartProductId}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }


  //Error handling function
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

}
