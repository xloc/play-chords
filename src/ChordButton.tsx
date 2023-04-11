import React from 'react';
import classNames from 'classnames';

import * as Tone from 'tone';
import { Chord } from "tonal";


const synth = new Tone.PolySynth(Tone.Synth).toDestination();


interface ChordButtonProps {
  text: string;
}

export default function ChordButton(props: ChordButtonProps) {
  const { text } = props;

  const notes = Chord.get(text).notes;
  const playNotes = notes.map(n => `${n}4`);


  const isTouchScreen = 'ontouchstart' in window ? true : undefined;

  const genOnClick = (text: string) => {
    return (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
      console.log(playNotes);
      synth.triggerAttackRelease(playNotes, "8n");
    };
  };


  return <button
    className={classNames('h-40 w-40 shadow-md border rounded-md p-3 select-none',
      { 'bg-red-200': notes.length === 0 })}
    onMouseDown={isTouchScreen ? undefined : genOnClick(text)}
    onTouchStart={isTouchScreen ? genOnClick(text) : undefined}
  >
    <p className='text-5xl'>{text}</p>
    <p>{playNotes.join(' ')}</p>
  </button>;
}
