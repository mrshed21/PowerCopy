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




import { categories } from "../data/categories"
import { Link, useLocation } from "react-router-dom";



export function AppSidebar() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <Sidebar className="z-50">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between bg-[#474747] text-white p-6 mb-2 shadow-md"><p className="flex-1 text-xl text-yellow-500 ">SE Power</p>  <p className="text-red-500"><SidebarTrigger icon={"X"} /></p></SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton isActive={location.pathname === `/${item.slug}` || location.pathname.startsWith(`/${item.slug}/`)} asChild>
                    <Link to={`${item.slug}`}>
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