import "./globals.css";

export const metadata = {
  title: "Monitoring Productivity",
  description: "WEST AREA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-teal-50 text-slate-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
