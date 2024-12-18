
import "@/app/globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "Dashboard",
  description: "Sidebar Layout with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
