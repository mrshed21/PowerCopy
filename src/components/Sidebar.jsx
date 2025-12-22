import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



import { SidebarTrigger } from "@/components/ui/sidebar"




import { catigory } from "../data/categories"
import { Link, useLocation } from "react-router-dom";



export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="z-50">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between bg-[#474747] text-white p-6 mb-2 shadow-md"><p className="flex-1">Application</p>  <p className="text-red-500"><SidebarTrigger icon={"X"} /></p></SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {catigory.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton isActive={location.pathname === item.url} asChild>
                    <Link to={item.url}>
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}