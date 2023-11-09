let tickSize = "16px";
let axisTitleSize = "14px";

const getPercentTicks = function () {
    return {
        callback: function( value, index, ticks ) {
            return ( value * 100 ).toFixed(0) + "%";
        },
        format: {
            style: "percent"
        },
        font:{
            size: tickSize
        }
    }
};

const getBillionsTicks = function () {
    return {
        callback: function (value, index, ticks) {
            return (value / 1000000000)
        },
        font:{
            size: tickSize
        }
    }
}

const getTicks = function () {
    return {
        font:{
            size: tickSize
        }
    }
}

const getTitle = function ( text ) {
    return {
        display: true,
        text: text,
        font: {
            weight: "bold",
            size: axisTitleSize
        }
    }
};


const scales = {
    views: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    likes: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    duration: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks(),
            title: getTitle( "seconds" )
        }
    },
    comments: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    annual_uploads: {
        y: {
            ticks: getBillionsTicks(),
            title: getTitle( "videos uploaded (billions)" )
        },
        x: {
            ticks: getTicks()
        }
    },
    cumulative_uploads: {
        y: {
            ticks: getBillionsTicks(),
            title: getTitle( "estimated size (billions)" )
        },
        x: {
            ticks: getTicks()
        }
    },
    subscribers: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    whisper_lang: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    music: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    category: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    live_status: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    },
    age_limit: {
        y: {
            ticks: getPercentTicks(),
            title: getTitle( "relative frequency" )
        },
        x: {
            ticks: getTicks()
        }
    }
};


const getScales = function ( name ) {
    return scales[ name ];
};


export {
    getScales
}