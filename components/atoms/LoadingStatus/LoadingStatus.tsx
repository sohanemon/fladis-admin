"use client";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingStatus = ({ height }: { height?: number }) => {
  return (
    <div className="loadingStatus" style={{ height: `${height}px` }}>
      <CircularProgress color="accent1" size={40} />
    </div>
  );
};
