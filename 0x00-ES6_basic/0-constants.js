export function taskFirst() {
  const info  = 'Am just learning using const.';
  return info;
}

export function addLast() {
  return ' is not right';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += addLast();

  return combination;
}
