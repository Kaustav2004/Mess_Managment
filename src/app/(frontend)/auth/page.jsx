"use client"
import { useState } from "react"
import SignupCard from "./signup"
import SigninCard from "./signin"
import Image from "next/image"

export default function Auth() {
  const [reg, setReg] = useState(false)

  return (
    <div className="flex">
      {/* Left Side - Image (Hidden on small screens) */}
      <div className="hidden xl:block w-1/2 bg-amber-200 relative h-content">
        <Image
          src="/auth_page_image.jpeg"
          alt="food"
          fill 
          className="object-cover h-full"
        />
      </div>

      {/* Right Side - Auth Forms (Takes full width when the left div is hidden) */}
      <div className="bg-gradient-to-l from-gray-900 via-gray-800 to-black  flex flex-col mt-5 pb-5 items-center w-full xl:w-1/2 min-h-screen h-auto ">
        {reg ? <SigninCard /> : <SignupCard />}

        <span
          onClick={() => setReg(!reg)}
          className="text-blue-500 cursor-pointer mt-4"
        >
          {reg ? "New Registration" : "Already have an account? Sign In"}
        </span>
      </div>
    </div>
  )
}
