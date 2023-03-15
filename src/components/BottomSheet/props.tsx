import * as React from "react";

export interface BottomSheetProps {
  children: React.ReactNode;
  snapPoints?: React.ReactNode;
  index?: number;
  onChange?: (value: number) => void;
}
