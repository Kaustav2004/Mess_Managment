"use client" // Add this at the top to make it a Client Component

import React from "react"
import Sidebar from "../../../../Components/Sidebar"
import ToggleSwitch from "../../../../Components/Toggle"
import { useState } from "react"
import TicketsComponent from "../../../../Components/Tickets"

const Page = () => {
  const [willEat, setWillEat] = useState(false)
  const [foodType, setFoodType] = useState("veg") // 'veg' or 'nonveg'

  const handleWillEatChange = () => {
    setWillEat(!willEat)
  }

  const handleFoodTypeChange = (type) => {
    // Only change if the new selection is different from current selection
    if (type !== foodType) {
      setFoodType(type)
    }
  }
  return (
    <>
      <div className="body flex flex-row h-screen ">
        {/* sidebar */}
        <div className="sidebar h-screen w-80">
          <Sidebar />
        </div>
        {/* main content */}

        <div className="main p-4 flex w-full">
          <div className="flex flex-col  gap-4 w-1/2 ">
            <div className="Payment ">
              <div>
                <div className="w-full  rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 ">
                  <div className=" rounded px-5 py-4">
                    <h6 className="font-sans text-base     font-bold antialiased md:text-lg lg:text-xl text-black">
                      Payment
                    </h6>

                    <div className="flex justify-between items-center mt-2">
                      <div className="text-center">
                        <p className="text-xl font-semibold text-green-600">
                          ₹ 1,20,345
                        </p>
                        <p className="text-gray-500 text-sm">Paid</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-semibold text-red-600">
                          ₹ 20,345
                        </p>
                        <p className="text-gray-500 text-sm">Unpaid</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded px-3 pb-3 ">
                    <button className="w-full rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Todays Choice  ">
              <div className="w-full p-4   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 pl-10">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Will You Eat Today?
                </h3>
                <div className="mb-6">
                  <ToggleSwitch
                    id="will-eat-toggle"
                    labelOn="Yes"
                    labelOff="No"
                    isChecked={willEat}
                    onChange={handleWillEatChange}
                  />
                </div>

                {willEat && (
                  <>
                    <h3 className="mb-4 mt-4 font-semibold text-gray-900 dark:text-white">
                      What Will You Eat Today?
                    </h3>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <ToggleSwitch
                          id="food-type-toggle"
                          labelOn="Veg"
                          labelOff="NonVeg"
                          isChecked={foodType === "veg"}
                          onChange={() =>
                            handleFoodTypeChange(
                              foodType === "veg" ? "nonveg" : "veg"
                            )
                          }
                        />
                        <div className="ml-4">
                          <span
                            className={`font-medium ${
                              foodType === "veg"
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                          >
                            Vegetarian
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="Menu">
              {" "}
              <div className="w-full rounded-lg border border-gray-200 p-4 shadow-sm bg-white pl-10">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Mess</h2>
                  <p className="text-sm text-gray-500">Today's Meal</p>
                </div>

                <div className="space-y-4">
                  {/* Lunch */}
                  <div className="flex items-start gap-10">
                    <div className="w-24 text-gray-500">Lunch</div>
                    <div className="flex-1">
                      <p className="text-green-600 font-medium">Veg</p>
                      <p className="text-gray-800">
                        Sprouts | 3 Chapatis | Rice | Dal
                      </p>
                      <p className="text-red-600 font-medium mt-2">Non-Veg</p>
                      <p className="text-gray-800">Egg Biryani</p>
                    </div>
                  </div>

                  {/* Dinner */}
                  <div className="flex items-start gap-10">
                    <div className="w-24 text-gray-500">Dinner</div>
                    <div className="flex-1">
                      <p className="text-green-600 font-medium">Veg</p>
                      <p className="text-gray-800">
                        Sprouts | 3 Chapatis | Rice | Dal
                      </p>
                      <p className="text-red-600 font-medium mt-2">Non-Veg</p>
                      <p className="text-gray-800">
                        Egg Curry | 3 Chapatis | Rice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Reports w-1/2 px-3">
            <TicketsComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
