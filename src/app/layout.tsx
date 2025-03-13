import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Vxer1x",
  description: "Portfolio of Vxer1x",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
