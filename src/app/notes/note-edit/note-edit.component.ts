import {
  Component, Input, OnInit, Output, EventEmitter
} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'tr-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  @Input() note: Note;
  @Output() changed: EventEmitter<Note> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editNote() {
    this.changed.emit(this.note)
  }

}
