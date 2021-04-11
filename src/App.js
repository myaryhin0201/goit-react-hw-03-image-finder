import { useState, useEffect } from 'react';
import { fetchImages } from './API/imagesApi';
import Layout from './components/Layouts';
import Searchbar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImgUrl, setLargeImgUrl] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!searchQuery) return;
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  const fetchArticles = () => {
    const options = { currentPage, searchQuery };
    setIsLoading(true);

    fetchImages(options)
      .then(hits => {
        const imageData = hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          }),
        );
        setImages(prevState => [...prevState, ...imageData]);
        setCurrentPage(prevState => prevState + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error));
    setIsLoading(false);
  };

  const openModal = (largeImg, alt) => {
    setLargeImgUrl(largeImg);
    setAlt(alt);
  };

  const closeModal = () => {
    setLargeImgUrl('');
    setAlt('');
  };

  const loadMoreButton = images.length > 0 && !isLoading;

  return (
    <Layout>
      <div className="App">
        <Searchbar onSubmit={onChangeQuery} />
        {error ? (
          <h2>OMG. Check connect to the internet(((</h2>
        ) : (
          <>
            {images.length === 0 ? (
              <h2>Enter your request</h2>
            ) : (
              <>
                <ImageGallery images={images} onClick={openModal} />
                {isLoading && <Loader />}
                {loadMoreButton && <Button onClick={fetchArticles} />}
                {largeImgUrl && (
                  <Modal onClose={closeModal}>
                    <img src={largeImgUrl} alt={alt} />
                  </Modal>
                )}
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}

export default App;
