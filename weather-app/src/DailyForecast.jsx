import React from 'react'

export default function 
({dailyForecast}) {
    const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long'})
  return (
    <>
    <div className="w-[90%] bg-b1 h-[10%] rounded-md p-1">
        <div className="inline-block">Day: {DAY_FORMATTER.format(dailyForecast.time)}</div>
        <div className="inline-block">Max: {dailyForecast.highTemp}</div>
        <div className="inline-block">Min: {dailyForecast.lowTemp}</div>
        <div className="inline-block">Precip: {dailyForecast.precip}</div>
    </div>
    </>
  )
}
