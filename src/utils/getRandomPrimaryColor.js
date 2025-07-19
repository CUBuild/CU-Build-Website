const getRandomPrimaryColor = () => {
  const colors = [
    { base: '#e31a90', light: 'rgba(227, 26, 144, 0.1)' }, // Pink
    { base: '#613395', light: 'rgba(97, 51, 149, 0.1)' }, // Purple
    { base: '#3baf49', light: 'rgba(59, 175, 73, 0.1)' }, // Green
    { base: '#52c2ec', light: 'rgba(82, 194, 236, 0.1)' }, // Cyan
    { base: '#f6de08', light: 'rgba(246, 222, 8, 0.1)' }, // Yellow
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default getRandomPrimaryColor;
