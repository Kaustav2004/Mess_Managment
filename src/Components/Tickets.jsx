import React from "react"

const TicketsComponent = () => {
  const tickets = [
    {
      id: 1,
      name: "Mike Ross",
      issue: "Water not Comming",
      avatar: "/mike-ross.jpg", // Replace with actual image path or use placeholder
    },
    {
      id: 2,
      name: "Jennifer Grint",
      issue: "Light is not available since last night",
      avatar: "/jennifer-grint.jpg",
    },
    {
      id: 3,
      name: "Casey Allen",
      issue: "Wifi is not working since past week, please fix it.",
      avatar: "/casey-allen.jpg",
    },
    {
      id: 4,
      name: "Tina Harris",
      issue: "Laundry is not working properly, please look into this quickly",
      avatar: "/tina-harris.jpg",
    },
    {
      id: 5,
      name: "Rick Butcher",
      issue: "Hot water tap is broken, please fix it urgently",
      avatar: "/rick-butcher.jpg",
    },
  ]

  return (
    <div className="w-full  mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-4 pb-2">
        <h2 className="text-xl font-semibold text-gray-800">Tickets</h2>
        <p className="text-sm text-gray-500">Unsolved Issues - 5</p>
      </div>

      <div className="divide-y divide-gray-100">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex items-center p-4">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <img
                src={ticket.avatar}
                alt={ticket.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = `https://ui-avatars.com/api/?name=${ticket.name.replace(
                    " ",
                    "+"
                  )}&background=random`
                }}
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{ticket.name}</h3>
              <p className="text-sm text-gray-500">{ticket.issue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketsComponent
