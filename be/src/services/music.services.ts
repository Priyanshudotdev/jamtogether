import env from "../lib/env";

const API_KEY = env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE = env.YOUTUBE_API_BASE_URL;

const searchYoutubeMusic = async (query: string) => {
  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=5&type=video&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("YouTube search API failed");
    }

    const data = await response.json();

    return data.items.map((item: any) => ({
      videoId: item.id?.videoId,
      title: item.snippet?.title,
      thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url,
      channelTitle: item.snippet?.channelTitle,
      publishedAt: item.snippet?.publishedAt,
    }));
  } catch (error) {
    console.error("Search error:", error);
    throw new Error("Error while searching YouTube music");
  }
};

const getMusicDetailById = async (videoId: string) => {
  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("YouTube video API failed");
    }

    const data = await response.json();
    const item = data.items?.[0];

    if (item && item.snippet) {
      const title = item.snippet.title;
      const thumbnail =
        item.snippet.thumbnails?.standard?.url || item.snippet.thumbnails?.medium?.url;
      console.log({ title, thumbnail });
      return { title, thumbnail };
    }

    throw new Error("No video found");
  } catch (error) {
    console.error("Detail fetch error:", error);
    throw new Error(`Error while fetching YouTube music detail of id ${videoId}`);
  }
};

export { searchYoutubeMusic, getMusicDetailById };
