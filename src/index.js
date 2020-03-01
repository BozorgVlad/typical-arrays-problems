
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
    array.sort((a,b) => {
      return a -b;
    });
    return array[0];
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    array.sort((a,b) => {
      return b - a;
    });
    return array[0];
  } else {
  return 0;
}
}

exports.avg = function avg (array) {
  if ( Array.isArray(array) && array.length > 0) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res / array.length;
} else {
  return 0;
}
}
