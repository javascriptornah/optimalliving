"use client";
import "./styles/global.scss";
import StyledComponentsRegistry from "@/lib/registry";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
