export const generateHexColor = () => {
  var hexChars = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
};
