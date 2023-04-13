import React from 'react';
import { flow } from 'lodash';
import { Note, Range } from 'tonal';
import classNames from 'classnames';

const expandRange = (st: string, ed: string) => {
  st = Note.simplify(st);
  if (st.includes('#') || st.includes('b')) {
    st = Note.transpose(st, '2m');
    st = Note.simplify(st);
  }

  ed = Note.simplify(ed);
  if (ed.includes('#') || ed.includes('b')) {
    ed = Note.transpose(ed, '2m');
    ed = Note.simplify(ed);
  }
  return [st, ed];
};

const isBlackKey = (note: string) => note.includes("b") || note.includes("#");


interface KeyboardProps {
  start: string;
  end: string;
  pressedKeys?: string[];
}
export default function Keyboard(props: KeyboardProps) {
  const [st, ed] = expandRange(props.start, props.end);
  const range = Range.chromatic([st, ed], { sharps: true });

  const pressedKeys = new Set(props.pressedKeys?.map(Note.midi));

  return (
    <div className='flex h-full justify-center'>
      {range.map((note) => {
        const blackKey = isBlackKey(note);
        const pressed = pressedKeys.has(Note.midi(note));
        return <div key={note} className={classNames(
          "flex justify-center items-end  h-full w-10 rounded-b-xl bg-slate-200 border-white", {
          '-mx-5 h-3/5 z-10 w-10 border-x-[4px] border-b-[4px]': blackKey,
          'mx-[2px]': !blackKey,
          'bg-orange-50': !pressed,
          'bg-orange-200': pressed,
        })}>
          <p className='text-xs m-2'>{note}</p>
        </div>;
      })}
    </div>
  );
}
