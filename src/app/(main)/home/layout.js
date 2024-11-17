import {
  AppSidebar,
  SidebarCustomTrigger,
} from "@/components/home/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarCustomTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
