import classNames from 'classnames';
import React from 'react';

import { Chord, Note, note } from "tonal";
import * as Tone from 'tone';


const synth = new Tone.PolySynth(Tone.Synth).toDestination();


const extendToHigherOctaves = (notes: string[], rootOctave: number | undefined) => {
  const chroma = notes.map(Note.chroma) as number[];
  let octave = rootOctave ?? 4;
  return notes.map((note, i) => {
    if (i > 0 && chroma[i] < chroma[i - 1]) {
      octave += 1;
    }
    return `${note}${octave}`;
  });
};

const wrapAround = (notes: string[], octave: number | undefined) => {
  return notes.map((n) => `${n}${octave ?? 4}`);
};


interface ChordButtonProps {
  text: string;
}
export default function ChordButton(props: ChordButtonProps) {
  const { text } = props;

  const chord = Chord.get(text);
  const notes = chord.notes;
  // const playNotes = extendToHigherOctaves(notes, 4);
  const playNotes = wrapAround(notes, 4);


  const isTouchScreen = 'ontouchstart' in window ? true : undefined;

  const genOnClick = (text: string) => {
    return (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
      console.log(playNotes);
      // setTimeout(() => { synth.releaseAll(); }, 5 * 1000); // guard
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
