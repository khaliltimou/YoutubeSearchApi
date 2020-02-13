import axios from 'axios'

const KEY = 'AIzaSyCm12UKBhH1N_I4bc75YoCTX0v6s3rMi6E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
