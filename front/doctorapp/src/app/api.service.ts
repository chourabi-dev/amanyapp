import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  notificationsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/list',

      httpOptions

    )
  }

  updateNotifications() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/update',

      httpOptions

    )
  }




 


 


}
