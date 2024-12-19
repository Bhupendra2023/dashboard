
import "@/app/globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from 'next-themes';
import { manrope_serif } from "@/lib/font";
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
      <body className={`${manrope_serif.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
