import React from "react";
import { PerfectCursor } from "perfect-cursors";

export function useCursors(cb, point) {
  const [pc] = React.useState(() => new PerfectCursor(cb));

  React.useLayoutEffect(() => {
    if (point) pc.addPoint(point);
    return () => pc.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pc]);

  const onPointChange = React.useCallback((point) => pc.addPoint(point), [pc]);

  return onPointChange;
}
