import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Model/Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() tarefa!: Tarefa
  @Output() OnDeleteTask = new EventEmitter<Tarefa>();
  @Output() OnToggleConcluido = new EventEmitter<Tarefa>();
  faTimes = faTimes

  OnDelete(tarefa: Tarefa) {
    this.OnDeleteTask.emit(tarefa)

  }

  OnToggle(tarefa: Tarefa) {
    this.OnToggleConcluido.emit(tarefa)
  }


}
