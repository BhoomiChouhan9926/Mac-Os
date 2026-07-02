import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const formatDateTime = (d) => {
    const weekday = d.toLocaleString('en-US', { weekday: 'short' })
    const month = d.toLocaleString('en-US', { month: 'short' })
    const day = d.getDate()
    const hours = d.getHours()
    const hour12 = hours % 12 || 12
    const minutes = String(d.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    return `${weekday} ${month} ${day} ${hour12}:${minutes} ${ampm}`
  }

  return (
    <div>
      {formatDateTime(now)}
    </div>
  )
}

export default DateTime
