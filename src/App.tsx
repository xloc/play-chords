import { ChangeEvent, useState } from 'react';
import ChordButton from './ChordButton';


function App() {
  const [chordText, setChordText] = useState('Cmaj7 Dm Em Fmaj7 Bdim Gaug F#');

  return (
    <div className='flex flex-col h-screen'>
      <input type="text" className='h-10 border' value={chordText} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setChordText(e.target.value);
      }} />
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
