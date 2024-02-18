import React from 'react'

export default function 
({dailyForecast}) {
    const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long'})
  return (
    <>
    <div className="w-[90%] bg-b1 h-[10%] rounded-md p-2 flex justify-between items-center border border-blue-900 font-semibold">
        <div className="inline-block text-white">{DAY_FORMATTER.format(dailyForecast.time)}</div>
        <div className="w-2/5 flex justify-around">
            <div className="inline-block mr-3 text-white">{dailyForecast.precip}</div>
            <div className='flex justify-around'>
                <div className="inline-block text-white">H {dailyForecast.highTemp}º</div>
                <div className="inline-block ml-2 text-white">L {dailyForecast.lowTemp}º</div>
            </div>
        </div>
    </div>
    </>
  )
}
