export function isEndReached(
  { layoutMeasurement, contentOffset, contentSize },
  paddingToBottom = 50,
) {
  const currentPoint = layoutMeasurement.height + contentOffset.y;
  const pivotPoint = contentSize.height - paddingToBottom;
  return currentPoint >= pivotPoint;
}
