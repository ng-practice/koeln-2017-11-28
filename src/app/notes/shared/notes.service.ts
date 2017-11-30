import { Injectable } from '@angular/core';
import {Note} from '../models/note';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class NotesService {

  constructor(
      private http: HttpClient
  ) { }
    notes: Note[] = [{
        guid: '368484af-ca37-4047-a4a0-d4f95ff81eb0',
        title: 'erste Notiz',
        text: 'denke daran Komponenten zu exportieren und Module zu exportieren',
        priority: 0
    },
        {
            guid: 'a26047a9-f219-4957-ba7f-52fd7bb8a828',
            title: 'Angular Documentation',
            text: 'check out https://angular.io',
            priority: 0,
        }];

//all(): Observable<Note[]> {
//      return Observable.of(this.notes)
//          .debounceTime(2500);
//    }

    allFromApi(): Observable<Note[]> {
      return this.http.get<Note[]>('http://localhost:4280/notes')
          .delay(1500)
          .do(notes => this.notes = notes);
    }

    sortNotes() {
        this.notes.sort((noteA, noteB) => {
            return noteB.priority - noteA.priority;
        });
    }

    pushNote(newNote: Note){
        this.notes.unshift(newNote);
        this.sortNotes();
    }

    pushToApi(newNote: Note) {
      newNote.guid = Math.random().toString().substr(3, 18);
      return this.http.post('http://localhost:4280/note', newNote);
    }

    deleteFromApi(note: Note) {
      return this.http.delete(`http://localhost:4280/memo/${note.guid}`, {responseType: 'text'})
          .do(() => this.notes.splice(this.notes.indexOf(note), 1));
    }

    getSingleNote(guid: string) {
        return this.http.get<Note>(`http://localhost:4280/note/${guid}`);
    }

    editNote(note: Note) {
        return this.http.put(`http://localhost:4280/note`, note);
    }
}
