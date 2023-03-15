import React, { useCallback, useMemo, useRef } from "react";

import BottomSheetComp from "@gorhom/bottom-sheet";

import { BottomSheetProps } from "./props";

const BottomSheet = ({
  children,
  snapPoints,
  index = 1,
  onChange,
}: BottomSheetProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheetComp>(null);

  // variables
  const defaultSnapPoints = useMemo(() => ["25%", "40%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges: ", index);
    if (onChange) {
      onChange(index);
    }
  }, []);
  // renders
  return (
    <BottomSheetComp
      ref={bottomSheetRef}
      index={index}
      snapPoints={snapPoints || defaultSnapPoints}
      onChange={handleSheetChanges}
    >
      {children}
    </BottomSheetComp>
  );
};

BottomSheet.title = 'BottomSheet'
export default BottomSheet;
