// server/src/utils/videoUtils.ts
export const extractVideoId = (url: string, platform: 'youtube' | 'facebook'): string | null => {
  if (platform === 'youtube') {
    // YouTube URL patterns
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /(?:youtube\.com\/v\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
  } else if (platform === 'facebook') {
    // Facebook URL patterns
    const patterns = [
      /(?:facebook\.com\/.*\/videos\/|fb\.watch\/)([0-9]+)/,
      /(?:facebook\.com\/video\.php\?v=)([0-9]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
  }
  
  return null;
};

export const getVideoEmbedUrl = (videoUrl: string, videoType: string): string => {
  if (videoType === 'youtube') {
    const videoId = extractVideoId(videoUrl, 'youtube');
    return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
  } else if (videoType === 'facebook') {
    const videoId = extractVideoId(videoUrl, 'facebook');
    return videoId ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false` : videoUrl;
  }
  return videoUrl;
};