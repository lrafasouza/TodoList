import { Component, EventEmitter, Output } from '@angular/core';
import { Tarefa } from '../../../Model/Tarefa';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {

  @Output() onAddTask = new EventEmitter<Tarefa>()

  public tarefa: string = ''
  public categoria: string = ''
  public concluido: boolean = false
  public mostrarFormulario: boolean = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  onSubmit() {
    if (!this.tarefa) {
      alert('Adicione uma Tarefa')
      return
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa = ''
    this.categoria = ''
    this.concluido = false

  }


  public listaCategorias = [
    { value: 'Casa', label: 'Casa' },
    { value: 'Trabalho', label: 'Trabalho' },
    { value: 'Faculdade', label: 'Faculdade' },
    { value: 'Academia', label: 'Academia' },
    { value: 'Lazer', label: 'Lazer' }
  ];
}
