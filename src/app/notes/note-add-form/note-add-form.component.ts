import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from '../models/note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tr-note-add-form',
  templateUrl: './note-add-form.component.html',
  styleUrls: ['./note-add-form.component.scss']
})
export class NoteAddFormComponent implements OnInit {
  @Output() created: EventEmitter<Note> = new EventEmitter();

  note: Note = new Note('', '', '', 0);
  constructor() { }

  ngOnInit() {
  }

  addNote(addForm: NgForm) {
    this.created.emit(
        Object.assign(new Note('', '', '', 0) ,  this.note)
    );
    addForm.resetForm();
  }

}
