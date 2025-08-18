import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../../Model/Tarefa';
import { TaskItem } from "../task-item/task-item";
import { CommonModule } from '@angular/common';
import { Taskservice } from '../../services/taskservice';
import { AddTask } from "../add-task/add-task";

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, CommonModule, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks implements OnInit {

  public tarefas: Tarefa[] = []

  constructor(private taskService: Taskservice) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado)
    })
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() =>
      (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)))
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe()
  }

  addTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa)

    })
  }
}
