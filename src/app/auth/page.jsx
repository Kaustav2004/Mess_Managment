"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  const authHandler = async () => {
    await signIn("google");
  };

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="flex flex-col items-center gap-4">

        <h1 className="text-3xl font-semibold">Welcome to Mess Management</h1>

        <div onClick={authHandler} className="mt-2">
          <div className="flex items-center gap-2 justify-center p-2 border border-gray-300 rounded-md cursor-pointer w-60">

            <Image src="/google_logo.png" alt="google" width={30} height={30} />
            <span>Sign in with Google</span>

          </div>
        </div>

        <div className="pt-2">OR </div>
        {/* normal input */}
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider',display: "flex", justifyContent: "center", alignItems: "center" }}
            className=" p-2 bg-gray-800 rounded-md shadow-lg"
            >
              <TabList onChange={handleChange} aria-label="lab API tabs example" >
              <Tab 
                label="Log In" 
                value="1"
                sx={{ 
                  color: "white",
                  // "&.Mui-selected": { color: "blue" }, // Selected tab color
                  // "&:hover": { color: "darkblue" }, // Hover effect
                }}
              />

              <Tab 
                label="Sign Up" 
                value="2"
                sx={{ 
                  color: "white",
                  // "&.Mui-selected": { color: "green" }, 
                  // "&:hover": { color: "darkgreen" }, 
                }}
              />
              </TabList>
            </Box>
            <TabPanel value="1">
            <div className="flex flex-col gap-4 items-center p-6 rounded-lg shadow-lg">
              <input 
                type="text" 
                placeholder="Email" 
                className="w-64 p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-64 p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="w-64 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition duration-300">
                Log In
              </button>
            </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="flex flex-col gap-4 items-center p-6 rounded-lg shadow-lg">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-64 p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input 
                type="text" 
                placeholder="Email" 
                className="w-64 p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-64 p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="w-64 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition duration-300">
                Sign Up
              </button>
            </div>

            </TabPanel>
          </TabContext>
        </Box>
      </div>
      
    </div>
  );
}
