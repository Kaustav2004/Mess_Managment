"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Image from "next/image"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import toast from "react-hot-toast"
import Loading from "../../../Components/Loading"

export default function SignupCard() {
  const { data: session } = useSession()
  const router = useRouter()
  const [value, setValue] = useState("1")
  const [loading, setLoading] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (session) {
      const email = session.user?.email
      if (
        !email ||
        !email.match(/^[a-z]+\d{4}@(cse|it|ece|ee|me|ce)\.jgec\.ac\.in$/)
      ) {
<<<<<<< HEAD
        toast.error("Use College Email Id")
        signOut()
      } else {
        toast.success("Authentication Done !!")
=======
        toast.error("Use College Email Id");
        signOut();
      }
      else{
        toast.success("Authentication Done !!");
>>>>>>> a8731165f4470c1264b5ec0a4485e3447f67a589
        router.push("/")
      }
    }
  }, [session, router])

  const authHandler = async () => {
<<<<<<< HEAD
    setLoading(true)
    await signIn("google")
    const email = session.user?.email
=======
    setLoading(true);
    await signIn("google");
    const email = session?.user?.email;
>>>>>>> a8731165f4470c1264b5ec0a4485e3447f67a589
    if (
      email && !email.match(/^[a-z]+\d{4}@(cse|it|ece|ee|me|ce)\.jgec\.ac\.in$/)
    ) {
      await signOut()
    }
    setLoading(false)
  }

  const [type, setType] = React.useState("")

  return (
    <div className=" bg-black">
      {loading && <Loading />}
      <Card
        className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white"
        sx={{ borderRadius: "1rem" }}
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Welcome to Hostel Management
        </h1>
        <CardContent>
          <div className="space-y-4">
            <div className="flex ">
              <div className="flex flex-col w-1/2 pr-1">
                <label className="text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div className="flex flex-col w-1/2 pl-1">
                <label className="text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="border rounded-lg p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="border rounded-lg p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                className="border rounded-lg p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Type of account
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type of account"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={10}>Student</MenuItem>
                  <MenuItem value={20}>Mess Committee</MenuItem>
                  <MenuItem value={30}>Super</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg mt-4">
              Sign Up
            </Button>
          </div>
        </CardContent>

<<<<<<< HEAD
        <div className="items-center flex flex-col gap-2 ">
=======
        <div
          className="items-center flex flex-col gap-2 "
        >
>>>>>>> a8731165f4470c1264b5ec0a4485e3447f67a589
          <h1>OR</h1>
          <div
            className="flex items-center gap-2 justify-center p-2 border border-gray-300 rounded-md cursor-pointer w-60 "
            onClick={authHandler}
          >
            <Image src="/google_logo.png" alt="google" width={30} height={30} />
            <span>Sign up with Google</span>
          </div>
        </div>
      </Card>
    </div>
  )
}