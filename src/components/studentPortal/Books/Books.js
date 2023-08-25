import React, {useState, useEffect} from "react";
import {
  onSnapshot,
  query,
  collection,
} from "firebase/firestore";
import {db} from '../../firebase/config';
import "./Books.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";

const Books = () => {

  const [booksJunior, setBooksJunior] = useState([{}]);
  const [booksSenior, setBooksSenior] = useState([{}]);

  useEffect(() => {
    const q = query(collection(db, 'booksjunior'));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setBooksJunior(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'bookssenior'));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setBooksSenior(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Students' Books</h2>
        <br />
        <p>Junior Secondary</p>
        <ul className="quiz-sub-container">
        {booksJunior.map((book, index) => (
              <li className="quiz-sub"><Link to={book.fileUrl}>{book.title}</Link></li>
            ))}
        </ul>
        <br /><br /><br />
        <p>Senior Secondary</p>
        <ul className="quiz-sub-container">
        {booksSenior.map((book, index) => (
              <li className="quiz-sub"><Link to={book.fileUrl}>{book.title}</Link></li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
