import axios from 'axios';

const KEY = 'AIzaSyDKVmOkG4mQReYr8QB0zABOK_-wOU5303Y';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
