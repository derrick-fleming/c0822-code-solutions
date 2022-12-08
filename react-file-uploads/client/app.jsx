import React, { useState, useRef } from 'react';

export default function App() {
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef();

  function handleCaptionChange(event) {
    setCaption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', fileInputRef.current.files[0]);
    console.log(fileInputRef.current.files[0]);
    fetch('/api/uploads', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setCaption('');
        fileInputRef.current.value = null;
      })
      .catch(err => console.error(err));
  }

  return (
      <div className="container">
        <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
          <div className="col col-md-8">
            <h3 className="text-center mb-5">React File Uploads</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Caption
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  value={caption}
                  onChange={handleCaptionChange}
                  className="form-control bg-light" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <input
                  required
                  type="file"
                  name="image"
                  ref={fileInputRef}
                  accept=".png, .jpg, .jpeg, .gif" />
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
