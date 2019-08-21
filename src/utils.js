export const getPxValue = value => (value || value === 0 ? `${value}px` : "");

export const getResulutionValue = (value, breakpoint) =>
  value || value === 0 ? getPxValue(value) : getPxValue(breakpoint);
