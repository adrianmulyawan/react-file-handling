import React, { useState } from 'react';
import NavbarComponent from '../components/navbar.component';

const PhotoPage = () => {
  document.title = 'Photo';

  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(true);
  // const [imageURLs, setImageURLs] = useState([]);

  // useEffect(() => {
  //   if (images.length < 1) {
  //     return;
  //   }

  //   // console.info(images, '=> image yang saya upload');

  //   const newImageUrls = [];
  //   images.forEach((image) => {
  //     // console.info(image, '=> loopingnya');
  //     const dataImage = newImageUrls.push(URL.createObjectURL(image));
  //     console.info(dataImage, '=> hasilnya');
  //     return dataImage;
  //   });

  //   setImageURLs(newImageUrls);
  // }, [images]);

  const imageHandler = (e) => {
    // > Tangkap gambarnya
    const dataImage = e.target.files;
    // console.info(dataImage, '=> data image anda');

    // > buat 
    const createUrlImage = URL.createObjectURL(dataImage[0]);
    // console.info(createUrlImage, '=> url image');

    setImages(createUrlImage);
    setLoad(false);
  }

  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h1 className="text-center">
          Upload Image
        </h1>
        <div className="mt-2">
          <label htmlFor="formFile" className="form-label">
            Choose Image
          </label>
          <input className="form-control" type="file" accept='image/*' id="formFile" onChange={ imageHandler } />
        </div>
        <div className='text-center mt-2'>
          <h4>Image Result</h4>
          {
            load ? 'Belum Upload' : ( <img src={ images } alt="my-banner-2023" /> )
          }
        </div>
        {/* {
          imageURLs.map((imageSrc) => {
            return (
              <>
                <img src={ imageSrc } alt="punya-saya-2022" />
              </>
            )
          })
        } */}
      </div>
    </>
  );
}

export default PhotoPage;
