import React from 'react'

export default function Header({location, date}) {
  return (
    <>
        <h2 className=" text-3xl text-white">{date.toDateString()}</h2>
        <h1 className=" text-l text-white">Latitude: {location.latitude}</h1>
        <h1 className=" text-l text-white">Longitude: {location.longitude}</h1>
    </>
  )
}
