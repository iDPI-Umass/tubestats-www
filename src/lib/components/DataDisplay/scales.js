const getTicks = function () {
  return {
    callback: function( value, index, ticks ) {
      return ( value * 100 ).toFixed(0) + "%";
    },
    format: {
      style: "percent"
    }
  }
};

const getTitle = function ( text ) {
  return {
    display: true,
    text: text,
    font: {
      size: "16px",
    }
  }
};


const scales = {
  views: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  likes: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  duration: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    },
    x: {
      title: getTitle( "seconds" )
    }
  },
  comments: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  annual_uploads: {
    y: {
      title: getTitle( "videos uploaded" )
    }
  },
  cumulative_uploads: {
    y: {
      title: getTitle( "estimated size" )
    }
  },
  subscribers: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  whisper_lang: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  music: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  category: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  live_status: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  },
  age_limit: {
    y: {
      ticks: getTicks(),
      title: getTitle( "relative frequency" )
    }
  }
};


const getScales = function ( name ) {
  return scales[ name ];
};


export {
  getScales
}