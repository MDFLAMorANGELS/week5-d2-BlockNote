import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ({ title, text }) => {
    const converter = new Showdown.Converter();
    const convertedHtml = converter.makeHtml(text);

  return (
    <div className='NoteDisplay'>
        <h2 className='titleNote'>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: convertedHtml }} />
    </div>

  );
}

export default NoteDisplay;