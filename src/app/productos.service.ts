import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/'; // URL de tu API Django
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2NTEzMDYwLCJpYXQiOjE3MTY1MTI3NjAsImp0aSI6IjE5MDU0MzI1MTg0NTQzODZhYjVkMDkxYjFmMDUxYTllIiwidXNlcl9pZCI6Mn0.d3fD9vOuj2F8BH78z-MqNtepgfuWrQx3fTWAVMEzSEk'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
