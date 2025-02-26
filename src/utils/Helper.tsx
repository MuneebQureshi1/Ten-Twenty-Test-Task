export const getImageUrl = (path?: string): string => {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : '';
};
