"use client"

import React from "react"

const ToggleSwitch = ({ id, labelOn, labelOff, isChecked, onChange }) => {
  return (
    <div className="relative inline-block w-[100px] h-[30px] rounded-full bg-gradient-to-b from-gray-200 to-white shadow-sm cursor-pointer">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="sr-only"
        checked={isChecked}
        onChange={onChange}
      />

      <label
        htmlFor={id}
        className={`block h-full rounded-full relative overflow-hidden text-[10px] uppercase
          ${
            isChecked ? "bg-blue-500 shadow-inner" : "bg-gray-200 shadow-inner"
          }`}
      >
        <span
          className={`absolute top-1/2 transform -translate-y-1/2 right-[11px] text-gray-400
          transition-opacity duration-300 ease-in-out ${
            isChecked ? "opacity-0" : "opacity-100"
          }`}
        >
          {labelOff}
        </span>

        <span
          className={`absolute top-1/2 transform -translate-y-1/2 left-[11px] text-white
          transition-opacity duration-300 ease-in-out ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
        >
          {labelOn}
        </span>
      </label>

      <span
        className={`absolute top-1 w-7 h-7 bg-gradient-to-b from-white to-gray-100 
          rounded-full shadow-md transform transition-all duration-300 ease-in-out
          ${isChecked ? "left-[74px]" : "left-1"}`}
      >
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-3 h-3 bg-gradient-to-b from-gray-200 to-white rounded-full"
        ></span>
      </span>
    </div>
  )
}

export default ToggleSwitch
