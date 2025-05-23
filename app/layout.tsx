import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head />
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
