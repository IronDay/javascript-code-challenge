function arrayFlatten<T>(arr: T[]) {
    return arr.reduce((result: T[], current) => Array.isArray(current) ? result.concat(...current) : result.concat(current), [])
}
