import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboardLayout">
      <p className="dashboardLayout-title">Dashboard Layout</p>
      <hr />
      <div className="dashboardLayout-children">{children}</div>
    </div>
  );
};
export default DashboardLayout;
