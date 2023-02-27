import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,throwError } from 'rxjs';
import { User } from 'src/shared/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public loginUser(user:User):Observable<any>{
  return this.http.post<any>("http://localhost:8080/login",user);
  }
  //Register User
  public RegisterUser(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/registeruser",user);
  }

  // handleError(error:Response){}
//   handleError(error:Response) {
//     debugger

//     let errorMessage = '';
//     if (errorinstanceof ErrorEvent) {
//         // client-side error
//         errorMessage = `Error: ${error.error.message}`;
//     } else {
//         // server-side error
//         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
// }
handleError(error: any){
  return throwError(error.message||"Server Error")
}
}
