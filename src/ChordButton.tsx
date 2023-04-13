import classNames from 'classnames';
import React from 'react';

import { Chord, Note, note } from "tonal";
import { Chord as ChordType } from "@tonaljs/chord";
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

interface ChordResult extends ChordType {
  playedNotes: string[];
}

// C:01123 => 'C2 C3 E3 G3'.split(' ')
const parseChord: (t: string) => ChordResult = (text: string) => {
  if (text.indexOf(':') === -1)
    text = text + ":00112345";

  const [chordName, numbers] = text.split(":");
  const chordNotes = numbers.split('').map(Number).map(Chord.degrees(chordName));
  const chroma = chordNotes.map(Note.chroma) as number[];

  let octave = 1;
  let playedNotes: string[] = [];
  chordNotes.forEach((note, i) => {
    if (note === '') {
      octave += 1;
      return;
    }
    if (i > 0 && chroma[i] <= chroma[i - 1]) {
      octave += 1;
    }
    playedNotes.push(`${note}${octave}`);
  });

  return { playedNotes, ...Chord.get(chordName) };
};


interface ChordButtonProps {
  text: string;
  onActivate?: (playedNotes: string[]) => void;
}
export default function ChordButton(props: ChordButtonProps) {
  const { onActivate, text } = props;

  const { playedNotes, symbol } = parseChord(text);


  const isTouchScreen = 'ontouchstart' in window ? true : undefined;

  const genOnClick = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    // setTimeout(() => { synth.releaseAll(); }, 5 * 1000); // guard
    synth.triggerAttackRelease(playedNotes, "8n");
    if (onActivate) onActivate(playedNotes);
  };



  return <button
    className={classNames('h-40 w-40 shadow-md border rounded-md p-3 select-none',
      { 'bg-red-200': playedNotes.length === 0 })}
    onMouseDown={isTouchScreen ? undefined : genOnClick}
    onTouchStart={isTouchScreen ? genOnClick : undefined}
  >
    <p className='text-5xl'>{symbol}</p>
    <p className='text-xs pt-2'>{playedNotes.join(' ')}</p>
  </button>;
}
