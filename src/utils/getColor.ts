export const getScoreColor = (
  score: number | string | null | undefined,
): string => {
  if (score) {
    if (Number(score) >= 7.5) return 'green';
    if (Number(score) >= 5 && Number(score) <= 7.5) return 'orange';
    if (Number(score) <= 4.9) return 'red';
  }
  return 'white';
};
