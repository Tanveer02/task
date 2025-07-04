export const shortenText = (text: string, length = 8) => {
  if (!text) return '';
  return text.length > length ? `${text.substring(0, length)}...` : text;
};
