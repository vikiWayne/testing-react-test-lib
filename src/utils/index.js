export const range = (start, end, step = 1) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => start + i * step
  );
};
