function isNetworkError(error) {
    if (error === null || error === undefined) {
        return false;
    }

    if (typeof error === 'object' && error.name === 'MongoNetworkError') {
        return true;
    }
}

function isMongooseError(error) {
    if (error === null || error === undefined) {
        return false;
    }

    if (typeof error === 'object' && error.name === 'ValidationError') {
        return true;
    }
}

module.exports = { isNetworkError, isMongooseError };