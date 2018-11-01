import * as React from 'react';

export interface Props {
  name: string,
  enthusiasmlevel?:number;
}

function Hello({ name, enthusiasmlevel = 1}: Props) {
  if (enthusiasmlevel <= 0){
    throw new Error('you could be a little more enthusiasmlevel')
  }
  return(
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmlevel)}
      </div>
    </div>
  )
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}