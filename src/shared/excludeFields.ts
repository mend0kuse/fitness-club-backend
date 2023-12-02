export const excludeFields = <Obj, Keys extends Array<keyof Obj>>(
  object: Obj,
  keys: Keys,
): Omit<Obj, Keys[number]> => {
  const tmp = object;

  for (const key in tmp) {
    if (keys.includes(key as Keys[number])) {
      delete tmp[key];
    }
  }

  return tmp;
};
