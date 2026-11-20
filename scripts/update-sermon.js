const axios = require("axios");
const fs = require("fs");

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;

async function getUploadsPlaylist() {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        part: "contentDetails",
        id: CHANNEL_ID,
        key: API_KEY,
      },
    }
  );

  const items = response.data.items;
  if (!items || !items.length) {
    throw new Error("Channel not found. Check CHANNEL_ID.");
  }

  return items[0].contentDetails.relatedPlaylists.uploads;
}

async function getLatestVideo(playlistId) {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: "snippet",
        playlistId: playlistId,
        maxResults: 1,
        key: API_KEY,
      },
    }
  );

  const items = response.data.items;
  if (!items || !items.length) {
    throw new Error("No videos found in uploads playlist.");
  }

  const snippet = items[0].snippet;
  return {
    id: snippet.resourceId.videoId,
    snippet,
  };
}

async function updateSermon() {
  try {
    const uploads = await getUploadsPlaylist();
    const video = await getLatestVideo(uploads);

    const descriptionLines = (video.snippet.description || "")
      .trim()
      .split("\n")
      .filter((line) => line.trim() !== "");

    const scripture = descriptionLines.length
      ? descriptionLines[descriptionLines.length - 1].trim()
      : "";

    const thumbnails = video.snippet.thumbnails || {};
    const thumbnailUrl =
      thumbnails.high?.url ||
      thumbnails.medium?.url ||
      thumbnails.default?.url ||
      "";

    const sermon = {
      title: video.snippet.title,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      thumbnail: thumbnailUrl,
      published: new Date(video.snippet.publishedAt).toLocaleDateString("en-US"),
      scripture,
    };

    fs.mkdirSync("data", { recursive: true });
    fs.writeFileSync("data/latest-sermon.json", JSON.stringify(sermon, null, 2));

    console.log("Latest sermon updated:", sermon);
  } catch (error) {
    console.error("Failed to update latest sermon:", error.response?.data || error.message);
    process.exit(1);
  }
}

updateSermon();
