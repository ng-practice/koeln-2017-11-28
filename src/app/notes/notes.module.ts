import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NoteCardComponent
} from './note-card/note-card.component';
import {MatCardModule, MatInputModule} from '@angular/material';
import {
    NoteGridComponent
} from './note-grid/note-grid.component';
import { NoteAddFormComponent } from './note-add-form/note-add-form.component';
import {FormsModule} from '@angular/forms';
import {NotesService} from './shared/notes.service';
import {HttpClientModule} from '@angular/common/http';
import { NoteDetailsComponent } from './note-details/note-details.component';
import {RouterModule} from "@angular/router";
import { NoteEditComponent } from './note-edit/note-edit.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      MatInputModule,
      MatCardModule,
      HttpClientModule,
      RouterModule
  ],
    declarations: [
        NoteCardComponent,
        NoteGridComponent,
        NoteAddFormComponent,
        NoteDetailsComponent,
        NoteEditComponent,

  ],
    exports: [
        NoteGridComponent,
        NoteDetailsComponent
    ],
    providers: [
        NotesService
    ]
})
export class NotesModule { }
