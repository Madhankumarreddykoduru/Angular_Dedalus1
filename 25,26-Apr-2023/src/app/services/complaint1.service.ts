import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Complaint1Service {
  httpOptions:any;
  constructor(private http:HttpClient){

  }
  
  postEnquiry(obj:any):Observable<any>{

      this.httpOptions =  new HttpHeaders({
        'Content-Type':  'application/json',
      })
    
    return this.http.post("http://localhost:4500/feedback1",obj,this.httpOptions);
   }
}
