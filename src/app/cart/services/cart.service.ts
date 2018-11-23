import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartServiceURL='http://localhost:3000/cartProducts';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(
    private httpclient:HttpClient
  ) { }

  getCartProducts():Observable<any>{
    return this.httpclient.get(this.cartServiceURL);   
  }

  getCartProductById(cartProductId):Observable<any>
  {
    return this.httpclient.get(`${this.cartServiceURL}/${cartProductId}`,this.httpOptions);
  }

  addCartItem(product):Observable<any>
  {
    return this.httpclient.post(`${this.cartServiceURL}`,product,this.httpOptions);
  }

  removeCartItem(cartProductId):Observable<any>
  {
    return this.httpclient.delete<any>(`${this.cartServiceURL}/${cartProductId}`,this.httpOptions);
  }

  updateCartItem(cartProductId:number,product):Observable<any>
  { 
    return this.httpclient.put(`${this.cartServiceURL}/${cartProductId}`,product,this.httpOptions);
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
