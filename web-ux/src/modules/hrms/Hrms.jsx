import { useEffect, useState } from 'react'
import RenderIf from '../../components/RenderIf'
import { EmployeeService } from '../../services/dataBaseService'
import ShowAddEmployeeModal from './components/AddEmployeeModal'

const HRMS = () => {
  const [employees, setEmployees] = useState([])
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false)
  useEffect(() => {
    getAllEmployees()
  }, [employees])

  const getAllEmployees = async () => {
    let employees = await EmployeeService.getAll()
    setEmployees(employees)
  }
  const TableHeaders = [
    'First Name',
    'Last Name',
    'Date of Birth',
    'Address',
    'E-Mail',
    'Date of Joining',
    'Designation',
    'Actions'
  ]
  return (
    <div>
      <button onClick={() => setShowAddEmployeeModal(true)}>
        Add Employee
      </button>
      <table>
        <tbody>
          <tr>
            {TableHeaders.map((header) => (
              <td>{header}</td>
            ))}
          </tr>

          {employees.map((employee) => (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dob}</td>
              <td>{employee.address}</td>
              <td>{employee.email}</td>dl
              <td>{employee.dateOfJoining}</td>
              <td>{employee.designation}</td>
              <td>
                <button onClick={() => EmployeeService.remove(employee.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RenderIf isVisible={showAddEmployeeModal}>
        <ShowAddEmployeeModal />
      </RenderIf>
    </div>
  )
}

export default HRMS
