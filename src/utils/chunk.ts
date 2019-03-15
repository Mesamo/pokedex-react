function chunk<T>(array: T[], size: number) {
  size = Math.max(size, 0);
  const length = array ? array.length : 0;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result: T[][] = new Array(Math.ceil(length / size));
  while(index < length) {
    result[resIndex++] = array.slice(index, index += size);
  }

  return result;
}

export default chunk;
