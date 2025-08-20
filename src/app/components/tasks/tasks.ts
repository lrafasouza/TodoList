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
  public error: string = ''

  constructor(private taskService: Taskservice) { }

  ngOnInit(): void {
    this.error = '';
    this.taskService.getTasks().subscribe({
      next: (dado) => {
        this.tarefas = dado;
      },
      error: (err) => {
        console.error('Erro ao carregar tarefas:', err);
        this.error = 'Erro ao carregar tarefas. Verifique se o servidor está rodando.';
      }
    })
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe({
      next: () => {
        this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
      },
      error: (err) => {
        console.error('Erro ao deletar tarefa:', err);
        alert('Erro ao deletar tarefa.');
      }
    })
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    tarefa.atualizadoEm = new Date();
    this.taskService.updateTask(tarefa).subscribe({
      next: () => {
        // Tarefa atualizada com sucesso
      },
      error: (err) => {
        console.error('Erro ao atualizar tarefa:', err);
        tarefa.concluido = !tarefa.concluido; // Reverter mudança
        alert('Erro ao atualizar tarefa.');
      }
    })
  }

  addTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe({
      next: (tarefa) => {
        this.tarefas.push(tarefa);
      },
      error: (err) => {
        console.error('Erro ao adicionar tarefa:', err);
        alert('Erro ao adicionar tarefa.');
      }
    })
  }
}
