import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NoteGridComponent} from './notes/note-grid/note-grid.component';
import {NoteDetailsComponent} from './notes/note-details/note-details.component';

const routes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'grid'},
    {path: 'grid', component: NoteGridComponent},
    {path: 'details/:guid', component: NoteDetailsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {
}
