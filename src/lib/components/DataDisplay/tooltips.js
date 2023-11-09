const getPercent = function () {
    return {
        callbacks: {
            label: function( context ) {
                return ( context.parsed.y * 100 ).toFixed(3) + "%";
            }
        }
    };
};

const getVideoCount = function () {
    return {
        callbacks: {
            label: function( context ) {
                return context.parsed.y.toLocaleString() + " videos"
            }
        }
    };
}


const tooltips = {
    views: getPercent(),
    likes: getPercent(),
    duration: getPercent(),
    comments: getPercent(),
    annual_uploads: getVideoCount(),
    cumulative_uploads: getVideoCount(),
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