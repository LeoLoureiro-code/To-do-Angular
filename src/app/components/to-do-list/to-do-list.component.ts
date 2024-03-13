import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { Observable, of } from 'rxjs';

interface toDoTask{
  task: string;
}

@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {

  constructor(private apiService: ApiServiceService) {}
 
  ngOnInit() {
      this.apiService.getAllToDo();
  }

}
