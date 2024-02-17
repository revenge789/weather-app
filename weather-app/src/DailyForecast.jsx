import React from 'react'

export default function 
({dailyForecast}) {
  return (
    <>
    <div className="w-[90%] bg-b1 h-[10%] rounded-md p-1">
        <div className="inline-block">Day: {dailyForecast.date}</div>
        <div className="inline-block">Max: {dailyForecast.max}</div>
        <div className="inline-block">Min: {dailyForecast.min}</div>
        <div className="inline-block">Temp: {dailyForecast.temperature}</div>
    </div>
    </>
  )
}
