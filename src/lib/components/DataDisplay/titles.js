const getTitle = function ( text ) {
  return {
    display: true,
    text: text,
    font: {
      size: "16px",
    }
  }
};


const titles = {
  views: getTitle( "Views" ),
  likes: getTitle( "Likes" ),
  duration: getTitle( "Duration" ),
  comments: getTitle( "Comments" ),
  annual_uploads: getTitle( "Yearly Video Uploads" ),
  cumulative_uploads: getTitle( "Yearly Estimated Size of YouTube" ),
  subscribers: getTitle( "Channel Subscribers" ),
  whisper_lang: getTitle( "Detectable Language" ),
  music: getTitle( "Accessible in YouTube Music" ),
  category: getTitle( "Category" ),
  live_status: getTitle( "Live Streaming Status" ),
  age_limit: getTitle( "Minimum Viewer Age" )
};


const _getTitle = function ( name ) {
  return titles[ name ];
};


export {
  _getTitle as getTitle
}