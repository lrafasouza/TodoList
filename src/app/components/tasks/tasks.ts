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
  public loading: boolean = true
  public error: string = ''

  constructor(private taskService: Taskservice) { }

  ngOnInit(): void {
    this.loading = true;
    this.error = '';
    
    setTimeout(() => {
      this.taskService.getTasks().subscribe({
        next: (dado) => {
          this.tarefas = dado;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erro ao carregar tarefas:', err);
          this.error = 'Erro ao carregar tarefas. Verifique se o servidor está rodando.';
          this.loading = false;
        }
      })
    }, 500);
  }

  deleteTask(tarefa: Tarefa) {
    // Remove imediatamente da interface (Optimistic UI)
    this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
    
    // Continua o processo em background
    this.taskService.deleteTask(tarefa).subscribe({
      next: () => {
        // Sucesso - já removido da interface
      },
      error: (err) => {
        console.error('Erro ao deletar tarefa:', err);
        // Reverter: adiciona de volta se der erro
        this.tarefas.push(tarefa);
        alert('Erro ao deletar tarefa. Tarefa restaurada.');
      }
    })
  }

  toggleConcluido(tarefa: Tarefa) {
    // Guarda estado anterior para possível reversão
    const estadoAnterior = tarefa.concluido;
    
    // Atualiza imediatamente na interface (Optimistic UI)
    tarefa.concluido = !tarefa.concluido;
    tarefa.atualizadoEm = new Date();
    
    // Continua o processo em background
    this.taskService.updateTask(tarefa).subscribe({
      next: () => {
        // Sucesso - já atualizado na interface
      },
      error: (err) => {
        console.error('Erro ao atualizar tarefa:', err);
        // Reverter: volta ao estado anterior
        tarefa.concluido = estadoAnterior;
        alert('Erro ao atualizar tarefa. Estado restaurado.');
      }
    })
  }

  addTask(tarefa: Tarefa) {
    // Cria uma tarefa temporária com ID temporário
    const tarefaTemporaria = { 
      ...tarefa, 
      id: Date.now(), // ID temporário
      criadoEm: new Date(),
      atualizadoEm: new Date()
    };
    
    // Adiciona imediatamente na interface (Optimistic UI)
    this.tarefas.push(tarefaTemporaria);
    
    // Continua o processo em background
    this.taskService.addTask(tarefa).subscribe({
      next: (tarefaReal) => {
        // Substitui a tarefa temporária pela real (com ID correto)
        const index = this.tarefas.findIndex(t => t.id === tarefaTemporaria.id);
        if (index > -1) {
          this.tarefas[index] = tarefaReal;
        }
      },
      error: (err) => {
        console.error('Erro ao adicionar tarefa:', err);
        // Remove a tarefa temporária se der erro
        this.tarefas = this.tarefas.filter(t => t.id !== tarefaTemporaria.id);
        alert('Erro ao adicionar tarefa. Tente novamente.');
      }
    })
  }
}
