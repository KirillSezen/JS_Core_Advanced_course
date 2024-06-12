const printNumbers = () => {
    const promises = Array.from({ length: 10 }, (_, index) => index + 1).map((num, i) => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(num);
                resolve();
            }, i * 1000);
        });
    });

    Promise.all(promises).then(() => console.log('Done'));
};

printNumbers();