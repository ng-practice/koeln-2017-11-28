import { Component } from '@angular/core';
import {NotesService} from './notes/shared/notes.service';
import {Note} from './notes/models/note';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-workshop';
    constructor(
        private notesService: NotesService) {

    }
}
