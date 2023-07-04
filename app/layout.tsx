"use client";
import "../styles/main.scss";
import { MuiTheme } from "@/theme/MuiTheme";
import { poppins } from "./fonts";
import { ReactNode } from "react";

export const metadata = {
  title: "Fladis-Erp",
  description: "Fladis Admin Panel",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <MuiTheme>
        <body className={`${poppins.className} mainLayout`}>
          <p className="mainLayout-title">Main Layout</p>
          <hr />
          <main>{children}</main>
        </body>
      </MuiTheme>
    </html>
  );
};
export default RootLayout;
