import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotesService} from '../shared/notes.service';
import {Note} from '../models/note';

@Component({
  selector: 'tr-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  note: Note = new Note('', '', '', 0);
  constructor(
      private activatedRoute: ActivatedRoute,
      private notesService: NotesService
  ) {
    const guid = activatedRoute.snapshot.params['guid'];
    this.notesService.getSingleNote(guid)
        .subscribe(note => {
          this.note = note;
        }, err => {
          console.error('Fehler beim laden der Note');
        });
  }

  ngOnInit() {
  }

  updateNote(note: Note) {
    this.notesService.editNote(note)
        .subscribe(next => {
          alert('note updated');
        });
  }

}
