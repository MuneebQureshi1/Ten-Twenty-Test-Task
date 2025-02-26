export const getImageUrl = (path?: string): string => {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : '';
};

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};
