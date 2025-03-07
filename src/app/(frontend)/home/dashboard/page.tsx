"use client"
import { useState } from "react"
import Image from "next/image"
import {
  FaBed,
  FaUserFriends,
  FaMoneyBillWave,
  FaExclamationCircle,
  FaLightbulb,
  FaWifi,
  FaTshirt,
  FaShower,
} from "react-icons/fa"

const Dashboard = () => {
  const [tickets, setTickets] = useState([
    { name: "Mike Ross", issue: "Water not coming" },
    {
      name: "Jennifer Grint",
      issue: "Light is not available since last night",
    },
    { name: "Casey Allen", issue: "Wifi is not working since past week" },
    { name: "Tina Harris", issue: "Laundry is not working properly" },
    { name: "Rick Butcher", issue: "Hot water tap is broken" },
  ])

  return (
    <div className="flex h-screen text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold">Hostel 4</h1>
        <nav className="mt-5">
          <ul className="space-y-3">
            <li className="p-2 bg-gray-700 rounded">Dashboard</li>
            <li className="p-2 hover:bg-gray-700 rounded">Meals</li>
            <li className="p-2 hover:bg-gray-700 rounded">Payment</li>
            <li className="p-2 hover:bg-gray-700 rounded">Ticket</li>
            <li className="p-2 hover:bg-gray-700 rounded">Reports</li>
            <li className="p-2 hover:bg-gray-700 rounded">Committee</li>
            <li className="p-2 hover:bg-gray-700 rounded">Transactions</li>
          </ul>
        </nav>
      </aside>

      <div className="main flex text-white w-full">
        <div className="payment-meals flex flex-col w-1/2 h-screen gap-4 justify-center items-center mx-40">
          <div className="payment bg-white rounded-lg w-full shadow-md  px-10">
            <p className="font-bold text-9rem text-black pt-5">Payment</p>

            <div className="flex justify-between p-4 ">
              <div className="text-center ">
                <p className="text-green-600 text-xl font-bold">
                  &#8377; 1,20,345
                </p>
                <p className="text-gray-500 text-sm">Paid</p>
              </div>

              <div className="text-center">
                <p className="text-red-600 text-xl font-bold">&#8377; 20,345</p>
                <p className="text-gray-500 text-sm">Unpaid</p>
              </div>
            </div>
          </div>
          <div className="meals w-full">
            <div className="p-5 border rounded-lg shadow-md w-full bg-white">
              <h2 className="font-bold text-lg text-black">Mess</h2>
              <p className="text-gray-500 text-sm">Today's Meal</p>

              <div className="mt-3">
                <h3 className="text-gray-500 font-semibold">Lunch</h3>
                <p className="text-green-600 font-semibold">Veg</p>
                <p className="text-black">Sprouts | 3 Chapatis | Rice | Dal</p>
                <p className="text-red-600 font-semibold">Non-Veg</p>
                <p className="text-black">Egg Biryani</p>
              </div>

              <div className="mt-3">
                <h3 className="text-gray-500 font-semibold">Dinner</h3>
                <p className="text-green-600 font-semibold">Veg</p>
                <p className="text-black">Sprouts | 3 Chapatis | Rice | Dal</p>
                <p className="text-red-600 font-semibold">Non-Veg</p>
                <p className="text-black">Egg Curry | 3 Chapatis | Rice</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tickets w-1/2 h-screen"><div className="p-4 border rounded-lg shadow-md w-80">
    <p className="text-lg font-semibold">Tickets</p>
    <p className="text-gray-500 text-sm">Unsolved Issues - 5</p>
    <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-3">
            <Image className="w-10 h-10 rounded-full" src="/path-to-image" alt="Mike Ross">
            <div>
                <p className="font-semibold">Mike Ross</p>
                <p className="text-gray-500 text-sm">Water not Coming</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Image className="w-10 h-10 rounded-full" src="/path-to-image" alt="Jennifer Grint">
            <div>
                <p className="font-semibold">Jennifer Grint</p>
                <p className="text-gray-500 text-sm">Light is not available since last night</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Image className="w-10 h-10 rounded-full" src="/path-to-image" alt="Casey Allen">
            <div>
                <p className="font-semibold">Casey Allen</p>
                <p className="text-gray-500 text-sm">Wifi is not working since past week, please fix it.</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Image className="w-10 h-10 rounded-full" src="/path-to-image" alt="Tina Harris">
            <div>
                <p className="font-semibold">Tina Harris</p>
                <p className="text-gray-500 text-sm">Laundry is not working properly, please look into this quickly</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Image className="w-10 h-10 rounded-full" src="/path-to-image" alt="Rick Butcher">
            <div>
                <p className="font-semibold">Rick Butcher</p>
                <p className="text-gray-500 text-sm">Hot water tap is broken, please fix it urgently</p>
            </div>
        </div>
    </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Dashboard
