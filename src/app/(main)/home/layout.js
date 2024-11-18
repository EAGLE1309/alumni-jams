import { SidebarCustomTrigger } from "@/components/main/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <main className="w-full flex">
        <SidebarCustomTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
