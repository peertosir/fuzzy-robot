function deepcopy(obj) {
  const isArray = Array.isArray(obj);

  if (typeof obj !== 'object' || obj == null) {
    throw new Error('Arg is not an object or not defined')
  }

  let copy = {}

  for (let key of Object.keys(obj)) {
    if (Array.isArray(obj[key])) {
      let arrayLikeObject = deepcopy(obj[key]);
      arrayLikeObject['length'] = obj[key].length;
      copy[key] = Array.from(arrayLikeObject);
    } else if (typeof obj[key] === 'object') {
      copy[key] = deepcopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }

  if (isArray) {
    copy.length = obj.length;
    return Array.from(copy);
  }

  return copy;
}
