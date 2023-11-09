const getPercent = function () {
  return {
    callbacks: {
      label: function( context ) {
        return ( context.parsed.y * 100 ).toFixed(3) + "%";
      }
    }
  };
};


const tooltips = {
  views: getPercent(),
  likes: getPercent(),
  duration: getPercent(),
  comments: getPercent(),
  annual_uploads: undefined,
  cumulative_uploads: undefined,
  subscribers: getPercent(),
  whisper_lang: getPercent(),
  music: getPercent(),
  category: getPercent(),
  live_status: getPercent(),
  age_limit: getPercent()
};


const getTooltip = function ( name ) {
  return tooltips[ name ];
};


export {
  getTooltip
}