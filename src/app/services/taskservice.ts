import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../../Model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {

  private apiURL = 'http://localhost:3000/tasks'
  private storageKey = 'todolist-tasks'

  constructor(private http: HttpClient) { }

  private isLocalStorageAvailable(): boolean {
    return typeof(Storage) !== "undefined";
  }

  private getFromLocalStorage(): Tarefa[] {
    if (this.isLocalStorageAvailable()) {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  private saveToLocalStorage(tasks: Tarefa[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
  }

  getTasks(): Observable<Tarefa[]> {
    return new Observable(observer => {
      this.http.get<Tarefa[]>(this.apiURL).subscribe({
        next: (tasks) => observer.next(tasks),
        error: () => {
          const tasks = this.getFromLocalStorage();
          observer.next(tasks);
        }
      });
    });
  }

  deleteTask(tarefa: Tarefa): Observable<Tarefa> {
    return new Observable(observer => {
      this.http.delete<Tarefa>(`${this.apiURL}/${tarefa.id}`).subscribe({
        next: (result) => observer.next(result),
        error: () => {
          const tasks = this.getFromLocalStorage();
          const filteredTasks = tasks.filter(t => t.id !== tarefa.id);
          this.saveToLocalStorage(filteredTasks);
          observer.next(tarefa);
        }
      });
    });
  }

  updateTask(tarefa: Tarefa): Observable<Tarefa> {
    return new Observable(observer => {
      this.http.put<Tarefa>(`${this.apiURL}/${tarefa.id}`, tarefa).subscribe({
        next: (result) => observer.next(result),
        error: () => {
          const tasks = this.getFromLocalStorage();
          const index = tasks.findIndex(t => t.id === tarefa.id);
          if (index > -1) {
            tasks[index] = tarefa;
            this.saveToLocalStorage(tasks);
          }
          observer.next(tarefa);
        }
      });
    });
  }

  addTask(tarefa: Tarefa): Observable<Tarefa> {
    return new Observable(observer => {
      this.http.post<Tarefa>(this.apiURL, tarefa).subscribe({
        next: (result) => observer.next(result),
        error: () => {
          const tasks = this.getFromLocalStorage();
          const newTask = { ...tarefa, id: Date.now() };
          tasks.push(newTask);
          this.saveToLocalStorage(tasks);
          observer.next(newTask);
        }
      });
    });
  }
}
