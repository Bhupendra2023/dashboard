import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-background min-h-screen">
       <Sidebar />
       <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div> 
    </div>
  );
}
