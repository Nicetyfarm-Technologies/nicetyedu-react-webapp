import React from 'react';
// import './Dashboard.css'
import { useRef } from 'react';
import StudentsMinNav from '../minNav/MinVav';

const StudentsResults = () => {

  const esults = useRef();
	const form = useRef();
	// const g10Ref = useRef();
	// const g11Ref = useRef();
  // const g12Ref = useRef();






  

	const showResults = (e) => {
    e.preventDefault();
		esults.current.classList.remove('none');
    esults.current.classList.add('math-papers')
    form.current.classList.add('none');
	}

  const closeResults = () => {
		esults.current.classList.add('none');
    esults.current.classList.remove('math-papers')
    form.current.classList.remove('none');
	}

    return (
      <div className="portal-content">
        <StudentsMinNav />
        <div className="portal-page-content">
        <h2>Students Results</h2>
        <form className='annonce-form2' ref={form} onSubmit={showResults}>
          <h3>Kindly Enter your ID to display</h3>
          <div className='inputs'>
            <input type='text' placeholder='Student ID' required />
            <button type='submit'>View</button>
          </div>
        </form>
        <div className="none" ref={esults}>
            <a href="#">Grade 8 Term 1</a>
            <a href="#">Grade 8 Term 2</a>
            <a href="#">Grade 8 Term 3</a>
            <a href="#">Grade 9 Term 1</a>
            <a href="#">Grade 9 Term 2</a>
            <a href="#">Grade 10 Term 1</a>
            <a href="#">Grade 10 Term 2</a>
            <a href="#">Grade 10 Term 3</a>
            <a href="#">Grade 11 Term 1</a>
            <a href="#">Grade 11 Term 2</a>
            <a href="#">Grade 11 Term 3</a>
            <a href="#">Grade 12 Term 1</a>
            <a href="#">Grade 12 Term 2</a>
            <button type='button' onClick={closeResults}>Close</button>
        </div>
        </div>
      </div>
    )
}

export default StudentsResults;