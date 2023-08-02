import React from 'react';
import NoteDisplay from '../NoteDisplay';
import { useState } from 'react';

function MarkDownInput({ markdownValue, onChange }) {
    const [values, setValues] = useState({ title: '', text: ''});

    const getHandler = (name) => {
        return (event) => {
            setValues({ ...values, [name]: event.target.value });
        };
    };

    const savePost = () => {
        const {title, text} = values;
        if (title && text) {
            const post = {title, text};
            localStorage.setItem(title, JSON.stringify(post));
            setValues({title: '', text: ''});
            window.location.reload();
            console.log('Save Complete')
        } else {
            console.error('le titre et le text ne doivent pas etre vides.')
        }
    };

  return (
    <div>
        <h1>Create Note</h1>
        <NoteDisplay  title={values.title} text={values.text}/>
        <div className='MarkDownInput'>
            <input 
                type="text" 
                className='inputTitle' 
                placeholder="Enter your title here..."
                value={values.title}
                onChange={getHandler('title')}
                maxLength={35}
                required
            />
            <textarea
                className='textarea'
                value={values.text} 
                onChange={getHandler('text')}
                placeholder="Enter your Markdown text here..."
                rows={12}
                maxLength={500}
                required
            />
        </div>
        <button className='button buttonSave' onClick={savePost}>Save Post</button>
    </div>
  );
}

export default MarkDownInput;