import axios from "axios";

const KEY = "AIzaSyC158hQ-cFDYZ0Z0JXorS2PaHAeoWNBDmw";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
