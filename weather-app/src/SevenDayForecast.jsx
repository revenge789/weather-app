import React from 'react'
import DailyForecast from './DailyForecast'

export default function () {
  return (
    <>
        <div className = "h-3/5 w-full bg-b4 flex flex-col items-center justify-evenly">
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
        </div>
    </>
  )
}
