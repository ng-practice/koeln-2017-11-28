import {NoteCardComponent} from './note-card.component';
import {Note} from "../models/note";

describe('NoteCardComponent', () => {
    
    describe('Unit Test', () => {
        
        describe('when a notes priority is increased', () => {
            it('should increase the priority by one', () => {
                //Arrange
                const noteCard = new NoteCardComponent();
                noteCard.noteInput = new Note('', '', '', 0);

                //Act
                noteCard.increasePriority();

                //Assert
                expect(noteCard.noteInput.priority).toEqual(1);

            });

        });
        describe('when a notes priority is 0 and it is decreased', () => {
            it('should stay at 0', () => {
                //Arrange
                const noteCard = new NoteCardComponent();
                noteCard.noteInput = new Note('', '', '', 0);

                //Act
                noteCard.decreasePriority();

                //Assert
                expect(noteCard.noteInput.priority).toEqual(0);

            });

        });
    });
});
