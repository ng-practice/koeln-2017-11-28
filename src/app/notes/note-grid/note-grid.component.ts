import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Note} from '../models/note';
import {NotesService} from '../shared/notes.service';

@Component({
  selector: 'tr-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrls: ['./note-grid.component.scss']
})
export class NoteGridComponent implements OnInit {
  notesInput: Note[];

  constructor(
      private notesService: NotesService
  ) {
      notesService.allFromApi()
          .subscribe(
              notes => {
              this.notesInput = this.notesService.notes;
              console.log('all Notes loaded', notes);
          }, err => {
              console.log('error loading Notes');
          });

  }

  ngOnInit() {

  }

  setPriority() {
   this.notesService.sortNotes();
  }

    deleteNote(note: Note) {
      this.notesService.deleteFromApi(note)
          .subscribe();
    }

    pushNote(note: Note) {
        this.notesService.pushToApi(note).subscribe();
    }
}
