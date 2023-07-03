"use client";
import FindInPageSharpIcon from "@mui/icons-material/FindInPageSharp";

export const NoResultsFound = ({ height }: { height?: number }) => {
  return (
    <div className="noResultsFound item" style={{ height: `${height}px` }}>
      <FindInPageSharpIcon sx={{ fontSize: "60px", color: "#00BFD2" }} />
      <h3>No Results Found</h3>
    </div>
  );
};
