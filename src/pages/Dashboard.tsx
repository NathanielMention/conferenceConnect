import React from 'react'
import { useAppSelector } from '../app/hooks';
import useAuth from '../hooks/useAuth';

function Dashboard() {
  const userInfo = useAppSelector((zoom) => zoom.auth.userInfo);
  console.log(userInfo)
  useAuth()
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard