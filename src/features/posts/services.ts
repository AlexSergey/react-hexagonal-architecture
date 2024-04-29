export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.split(' ').length;

  return Math.ceil(wordCount / wordsPerMinute);
};
