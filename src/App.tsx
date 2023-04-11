import { ChangeEvent, useState } from 'react';
import ChordButton from './ChordButton';
import classNames from 'classnames';


function App() {
  const [chordText, setChordText] = useState('C Dm Em F G7 Am');
  const [edit, setEdit] = useState(false);

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
      <div className="flex flex-1 justify-center items-center">
        <div className='flex items-center flex-wrap justify-center gap-5'>
          {chordText.split(' ').map((chord) => {
            return <ChordButton text={chord} key={chord} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
