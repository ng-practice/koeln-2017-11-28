import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'tr-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
    @Input() noteInput: Note;
    @Output() priorized: EventEmitter<void> = new EventEmitter();
    @Output() deleted: EventEmitter<Note> = new EventEmitter();
    constructor() { }

  ngOnInit() {
  }

  increasePriority(): void {
        this.noteInput.priority++;
        this.priorized.emit();
  }

  decreasePriority(): void {
    if (this.noteInput.priority === 0) {
        return;
    }
    this.noteInput.priority--;
    this.priorized.emit();
  }

  delete() {
      this.deleted.emit(this.noteInput);
  }

}
