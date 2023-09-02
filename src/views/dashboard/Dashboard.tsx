import React, { useMemo } from 'react'
import '../../scss/_custom.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useFetchVideoViewsQuery } from '../../state/Data'
import moment from 'moment'

const Dashboard = () => {
  const { data } = useFetchVideoViewsQuery()
  console.log('data:', data)

  const firstData = useMemo(() => {
    if (!data) {
      return [] // Return an empty array or handle it as needed when data is undefined
    }
    return (
      data &&
      data.data.events.map(
        ({ viewer_time, playback_time, name, event_time }) => {
          return {
            viewer_time: viewer_time,
            playback_time: Math.round(playback_time / 6000),
            name: name,
            event_time: event_time,
          }
        },
      )
    )
  }, [data])

  return (
    <div className="dashboard">
      <div className="dashboardbox box1">
        {/* simple area chart rechart */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={firstData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="playback_time"
              stroke="#1b167b"
              fillOpacity={1}
              fill="#564eef"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="dashboardbox box2"></div>
      <div className="dashboardbox box3"></div>
      <div className="dashboardbox box4"></div>
      <div className="dashboardbox box5"></div>
      <div className="dashboardbox box6"></div>
      <div className="dashboardbox box7"></div>
      <div className="dashboardbox box8"></div>
      <div className="dashboardbox box9"></div>
      <div className="dashboardbox box10"></div>
    </div>
  )
}

export default Dashboard
