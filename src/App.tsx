import { ChangeEvent, useState } from 'react';
import ChordButton from './ChordButton';
import classNames from 'classnames';
import Keyboard from './Keyboard';


function App() {
  const [chordText, setChordText] = useState('Fmaj7:001134 G6 Em Am:001124 Dm G7:01131234 C6:00131412');
  const [edit, setEdit] = useState(false);
  const [pressedNotes, setPressedNotes] = useState<string[]>([]);

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex h-16'>
        <button className='w-16 m-2 border rounded'
          onClick={() => setEdit(v => !v)}>EDIT</button>
        <input
          className={classNames(
            'flex-1 m-2 px-2 border rounded',
            { 'hidden': !edit })}
          type="text"
          value={chordText}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setChordText(e.target.value);
          }} />
      </div>
      <div className="flex flex-1 justify-center items-center overflow-y-scroll">
        <div className='flex items-center flex-wrap justify-center gap-5'>
          {chordText.split(' ').map((chord) => {
            return <ChordButton
              key={chord}
              text={chord}
              onActivate={(notes) => setPressedNotes(notes)} />;
          })}
        </div>
      </div>
      <div className="h-40 w-full border-t">
        <Keyboard start='A2' end='D6' pressedKeys={pressedNotes} />
      </div>
    </div>
  );
}

export default App;
