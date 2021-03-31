import { useState, useEffect, useCallback, useRef } from "react";
import { useDidMount } from "./useDidMount";

export const useChangeEffect = (effect, deps) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      effect();
    } else {
      didMount.current = true;
    }
  }, [deps]);
};
