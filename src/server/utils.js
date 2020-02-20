function getURL(req) {
    const {
        query: {
            url = ''
        } = {}
    } = req || {};
    return url;
};

function getSummary(URL, cb, textapi){
  textapi.summarize({ url: URL }, cb)
}; 

function unpackSummary(...summary) {
    const [
        _,
        {
            sentences = []
        } = {}
    ] = summary || [];
    return sentences;
}

module.exports = {
    getURL,
    getSummary,
    unpackSummary
}
