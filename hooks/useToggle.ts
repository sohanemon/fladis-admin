import { useState } from "react";

export const useToggle = () => {
  // local state
  const [toggled, setToggle] = useState(false);

  // handlers
  const toggle = () => setToggle((toggled) => !toggled);

  return { toggled, toggle };
};
