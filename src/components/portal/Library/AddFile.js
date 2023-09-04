import React, {useState} from "react";
import { storage } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Modal from "react-modal";

const AddFile = ({
  val,
  modalIsOpen,
  closeModal,
  customStyles,
  title,
  setTitle,
  level,
  setLevel,
  type,
  setType,
  topic,
  setTopic,
  year,
  setYear,
  subject,
  setSubject,
  term,
  setTerm,
  category,
  setCategory,
  fileUrl,
  setFileUrl,
  addBook,
  addVideo,
  addPastpaper
}) => {
  const [progresspercent, setProgresspercent] = useState(0);
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
        });
      }
    );
  };

  if (val === 1) {
    return (
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>Add Book</h2>
          {!fileUrl && (
            <div className="outerbar">
              <div
                className="innerbar"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="file-form">
            <input value={file} onChange={(e) => setFile(e.target.value)} type="file" required />
            <button type="submit">Attach</button>
          </form>
          <form onSubmit={addBook} className="file-details-form">
            <div className="file-details">
              <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Book Title"
                  required
                />
              </label>

              <label>
                Level:
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="Junior-Secondary">Junior Secondary</option>
                  <option value="Senior-Secondary">Senior Secondary</option>
                  <option value="Teachers">Teachers</option>
                </select>
              </label>

              <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="Textbook">Text Book</option>
                  <option value="Pamphlet">Pamphlet</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                Subject:
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Literature</option>
                  <option value="ICT">ICT</option>
                  <option value="Business">Business</option>
                  <option value="R.E">R.E</option>
                  <option value="History">History</option>
                  <option value="C.E">C.E</option>
                  <option value="Geography">Geography</option>
                </select>
              </label>
            </div>
            <button type="submit">Post Book</button>
          </form>
        </div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    );
  } else if (val === 2) {
    return (
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>Add Video</h2>
          {!fileUrl && (
            <div className="outerbar">
              <div
                className="innerbar"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="file-form">
            <input type="file" required />
            <button type="submit">Attach</button>
          </form>
          <form onSubmit={addVideo} className="file-details-form">
            <div className="file-details">
              <label>
                Topic:
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Topic"
                  required
                />
              </label>

              <label>
                Level:
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="Junior-Secondary">Junior Secondary</option>
                  <option value="Senior-Secondary">Senior Secondary</option>
                </select>
              </label>

              <label>
                Subject:
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Literature</option>
                  <option value="ICT">ICT</option>
                  <option value="Business">Business</option>
                  <option value="R.E">R.E</option>
                  <option value="History">History</option>
                  <option value="C.E">C.E</option>
                  <option value="Geography">Geography</option>
                </select>
              </label>
            </div>
            <button type="submit">Post Video</button>
          </form>
        </div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    );
  } else if (val === 3) {
    return (
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>Add Pastpaper</h2>
          {!fileUrl && (
            <div className="outerbar">
              <div
                className="innerbar"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="file-form">
            <input type="file" required />
            <button type="submit">Attach</button>
          </form>
          <form onSubmit={addPastpaper} className="file-details-form">
            <div className="file-details">
              <label>
                Year:
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </label>

              <label>
                Term:
                <select value={term} onChange={(e) => setTerm(e.target.value)}>
                  <option value="Term-1">Term 1</option>
                  <option value="Term-2">Term 2</option>
                  <option value="Term-3">Term 3</option>
                </select>
              </label>

              <label>
                Category:
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Mid-Term">Mid Term</option>
                  <option value="End-Term">End Of Term</option>
                </select>
              </label>

              <label>
                Level:
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="Junior-Secondary">Junior Secondary</option>
                  <option value="Senior-Secondary">Senior Secondary</option>
                </select>
              </label>

              <label>
                Subject:
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Literature</option>
                  <option value="ICT">ICT</option>
                  <option value="Business">Business</option>
                  <option value="R.E">R.E</option>
                  <option value="History">History</option>
                  <option value="C.E">C.E</option>
                  <option value="Geography">Geography</option>
                </select>
              </label>
            </div>
            <button type="submit">Post Pastpaper</button>
          </form>
        </div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    );
  } else if (val === 4) {
    return (
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>Add Quiz Question</h2>
          {!fileUrl && (
            <div className="outerbar">
              <div
                className="innerbar"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="file-form">
            <input type="file" required />
            <button type="submit">Attach</button>
          </form>
          <form onSubmit={addPastpaper} className="file-details-form">
            <div className="file-details">
              <label>
                Level:
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="Junior-Secondary">Junior Secondary</option>
                  <option value="Senior-Secondary">Senior Secondary</option>
                </select>
              </label>

              <label>
                Subject:
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Literature</option>
                  <option value="ICT">ICT</option>
                  <option value="Business">Business</option>
                  <option value="R.E">R.E</option>
                  <option value="History">History</option>
                  <option value="C.E">C.E</option>
                  <option value="Geography">Geography</option>
                </select>
              </label>
            </div>
            <button type="submit">Post Question</button>
          </form>
        </div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    );
  } else if (val === 5) {
    return (
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>Add Practical</h2>
        </div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    );
  } else {
    return (
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>Add Assignment</h2>
          <div className="coming-soon">Coming Soon</div>
        </div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    );
  }
};

export default AddFile;
