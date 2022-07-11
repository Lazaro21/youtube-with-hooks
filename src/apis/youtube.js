import axios from 'axios';

const KEY = "AIzaSyCwQXlUAQX2L_6B1qEJea9NFIkiT0Bbb-E";


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
