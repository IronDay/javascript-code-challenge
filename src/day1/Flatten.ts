function flatten(arr: number[]) {
  // @ts-ignore
  return arr.reduce(
    (result, current) =>
      Array.isArray(current)
        ? result.concat(...current)
        : result.concat(current),
    [],
  );
}