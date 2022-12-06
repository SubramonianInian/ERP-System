import Hrms from './assets/people.svg'
import Report from './assets/report.svg'
import Booking from './assets/booking.svg'
import Payroll from './assets/payroll.svg'
import Employee from './assets/employee.svg'
import Inventory from './assets/inventory.svg'
import { Modules } from './enums'

// The application modules
export const modules = [
  {
    id: Modules.HRMS,
    name: 'HRMS',
    details: 'Manage Internal HR Functions',
    image: Hrms
  },
  {
    id: Modules.Booking,
    name: 'Booking',
    details: 'Manage Customer Booking',
    image: Booking
  },
  {
    id: Modules.Attendance,
    name: 'Attendance',
    details: 'Manage Employee Attendance',
    image: Employee
  },
  {
    id: Modules.Inventory,
    name: 'Inventory',
    details: 'Manage Store Inventory',
    image: Inventory
  },
  {
    id: Modules.Payroll,
    name: 'Payroll',
    details: 'Manage Employee Payroll',
    image: Payroll
  },
  {
    id: Modules.Reports,
    name: 'Report',
    details: 'Generate Custom Reports',
    image: Report
  }
]
