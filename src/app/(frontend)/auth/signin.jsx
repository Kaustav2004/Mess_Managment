"use client"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import * as React from "react"
import toast from "react-hot-toast"
import Loading from "../../../Components/Loading"

export default function SigninCard() {
  const { data: session } = useSession()
  const router = useRouter()
  const [value, setValue] = useState("1")
  const [loading,setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (session) {
      const email = session.user?.email;
      if (
        !email ||
        !email.match(/^[a-z]+\d{4}@(cse|it|ece|ee|me|ce)\.jgec\.ac\.in$/)
      ) {
        toast.error("Use College Email Id");
         signOut();

      }
      else{
        toast.success("Authentication Done !!");
        router.push("/")
      }
    }
  }, [session])

  const authHandler = async () => {
    setLoading(true);
    await signIn("google");
    if (
      !email ||
      !email.match(/^[a-z]+\d{4}@(cse|it|ece|ee|me|ce)\.jgec\.ac\.in$/)
    ) {
      await signOut();
    }
    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center bg-black">
      {loading && <Loading />}
      <Card className="w-full max-w-md p-6 shadow-lg bg-white" sx={{ borderRadius: "1rem" }}>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Welcome to Hostel Management
        </h1>
        <CardContent>
          <div className="space-y-4">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-sm text-sky-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg mt-4">
              Sign In
            </Button>
          </div>
        </CardContent>
        <div
          onClick={authHandler}
          className="mt-2 items-center flex flex-col gap-2 cursor-pointer"
        >
          <h1 className="">OR</h1>
          <div className="flex items-center gap-2 justify-center p-2 border border-gray-300 rounded-md cursor-pointer w-60">
            <Image src="/google_logo.png" alt="google" width={30} height={30} />
            <span>Login with Google</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
