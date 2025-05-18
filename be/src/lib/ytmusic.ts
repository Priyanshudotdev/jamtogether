import YTMusic from 'ytmusic-api';
import play from 'play-dl';

const ytmusic = new YTMusic();

async function getStreamUrl(ytURL: string) {
  const info = await play.video_info(ytURL);
  const stream = await play.stream_from_info(info);

  // if (stream.url) {
  // console.log('Playable URL:', stream); // Use this in <audio> tag
  // }
  console.log(stream.stream.pipe);
  return stream;
}

export async function initYT() {
  await ytmusic.initialize({});
  let videoId;
  ytmusic.searchSongs('Never gonna give you up').then(async (res) => {
    const videoId = res[0].videoId;
    const response = await ytmusic.getSong(videoId);
    console.log('\nID: ', videoId);
    const ytURL = `https://www.youtube.com/watch?v=${videoId}`;
    console.log('\nGOT URL\\n\n', ytURL);

    const stream = getStreamUrl(ytURL);
    return stream;
  });
}
