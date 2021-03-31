import { useState, useEffect, useCallback } from "react";

export const useFunctionState = (initialFunction = () => {}) => {
  const [functionState, setFunctionState] = useState(() => initialFunction);
  const setFunction = useCallback(
    (newFunctionState) => {
      setFunctionState(() => {
        return newFunctionState;
      });
    },
    [setFunctionState],
  );
  return [functionState, setFunction];
};
