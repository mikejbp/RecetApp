import React, { useState } from 'react'
import '../../Styles/ImgPosts.css'

const ImgPosts = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  
  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (selected && allowedTypes.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      }
      reader.readAsDataURL(selected);
    }
    else {
      setError(true);
    }
  }

  const removeImage = () => setImgPreview(null);
  
    return (
        <div className="container-img">
          {imgPreview && <button className='btn-remove' onClick={removeImage}>Remove Image</button>}
          <div className="wrapper-img">
            {error && <p className='errorMsg'>File not supported</p>}
            <div 
              className="imgPreview"
              style={{
                background: imgPreview 
                ? `url("${imgPreview}") no-repeat center/contain` : "var(--dark-color)"
              }}
              >
              {!imgPreview && (
                <>
                  <p>Añade una imagen para la receta</p>
                  <label htmlFor='fileUpload' className='customFileupload'>
                    ¡Click aquí!
                  </label>
                  <input type='file' id='fileUpload' onChange={handleImageChange} />
                  <span>(jpg, jpeg or png)</span>
                </>
              )}
            </div>
          </div>
  
        </div>
  
    );
  
}

export default ImgPosts