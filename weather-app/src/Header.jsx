import React from 'react'

export default function Header({location, date}) {
  return (
    <>
        <h2 className=" text-xl text-white">Date: {date.toDateString()}</h2>
        <h1 className=" text-xl text-white">Latitude: {location.latitude}</h1>
        <h1 className=" text-xl text-white">Longitude: {location.longitude}</h1>
    </>
  )
}
