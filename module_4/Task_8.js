function convertToPromise(callbackFunction, ...args) {
    return new Promise((resolve, reject) => {
        callbackFunction(...args, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function getDataWithCallback(callback) {
    setTimeout(() => {
        callback(null, 'Data received');
    }, 1000);
}

convertToPromise(getDataWithCallback)
    .then(data => console.log(data))
    .catch(error => console.error(error));