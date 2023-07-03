"use client";
import "@styles/main.scss";
import { MuiTheme } from "@/theme/MuiTheme";
import { poppins } from "./fonts";
import { ReactNode } from "react";

export const metadata = {
  title: "Fladis-Erp",
  description: "Fladis Admin Panel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <MuiTheme>
        <body className={poppins.className}>
          <main>{children}</main>
        </body>
      </MuiTheme>
    </html>
  );
}
