import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly URL = 'https://localhost:7053/api/ToDo/'

  constructor(private http: HttpClient) { }

  getAllToDo(){
    this.http.get('https://localhost:7053/api/ToDo/GetToDos').subscribe(data =>{
      console.log(data);
    })
  }
}
