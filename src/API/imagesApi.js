import axios from 'axios';

const API_KEY = '20359490-f2da25da5356f05e90d2084aa';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 9 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(({ data: { hits } }) => hits);
};

export default { fetchImages };
