export const hexToRgb = (hex: string, opacity?: number) => {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  if (opacity) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};
