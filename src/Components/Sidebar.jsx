"use client"
import React, { useState, useEffect } from "react"
import CustomAvatar from "./Avatar"
import {
  Card,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Drawer,
} from "@material-tailwind/react"
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid"

export default function ResponsiveSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  const sidebarContent = (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl text-black text-xl gap-5">
      <div className="mb-2 p-4 flex gap-20  items-center">
        <p className="text-2xl  w-auto">Hostel 4</p>
        <CustomAvatar> </CustomAvatar>
      </div>
      <List className="space-y-4 ml-2">
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  )

  return (
    <>
      {isLargeScreen ? (
        <div className="hidden lg:block">{sidebarContent}</div>
      ) : (
        <>
          <IconButton variant="text" size="lg" onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </IconButton>
          <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
            {sidebarContent}
          </Drawer>
        </>
      )}
    </>
  )
}
