import React from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import { Modules } from '../enums'
import HRMS from '../modules/hrms/Hrms'
import '../modules/home/styles/home.scss'
import withLayout from '../layouts/withlayout'
import { addDoc, collection } from 'firebase/firestore'
import ModuleSwitcher from '../modules/home/components/moduleSwitcher/ModuleSwitcher'

const Home = () => {
  const ref = collection(db, 'test')

  // useEffect(() => {
  //     addDoc(ref, { test: 0 });
  // }, [])

  const [selectedModule, setSelectedModule] = useState(Modules.HRMS)

  const onModuleSelect = (module) => {
    setSelectedModule(module)
  }

  const getModule = () => {
    switch (selectedModule) {
      case Modules.HRMS:
        return <HRMS />
      case Modules.Attendance:
      case Modules.Booking:
      case Modules.Inventory:
      case Modules.Payroll:
      case Modules.Reports:
      default:
        return <div>Module Under development..!</div>
    }
  }
  return (
    <div className='main-wrapper'>
      <div>Dashboard</div>
      <ModuleSwitcher
        selectedModule={selectedModule}
        onModuleSelect={onModuleSelect}
      />
      {getModule()}
    </div>
  )
}

export default withLayout(Home)
