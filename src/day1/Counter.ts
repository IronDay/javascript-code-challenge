const createCounter = (n: number) => {
    let count = n - 1;
    return function counter() {
        count += 1;
        return count;
    }
}

export default createCounter;