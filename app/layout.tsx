"use client";
import { MuiTheme } from "@/theme/MuiTheme";
import { poppins } from "./fonts";

export const metadata = {
  title: "Fladis-Erp",
  description: "Fladis Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MuiTheme>
          <main className={poppins.className}>
            <div className="children">{children}</div>
          </main>
        </MuiTheme>
      </body>
    </html>
  );
}
