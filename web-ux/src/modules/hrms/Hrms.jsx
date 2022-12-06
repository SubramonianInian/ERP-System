import { useEffect, useState } from 'react'
import RenderIf from '../../components/RenderIf'
import { EmployeeService } from '../../services/dataBaseService'
import ShowAddEmployeeModal from './components/AddEmployeeModal'

const HRMS = () => {
  const [employees, setEmployees] = useState([])
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState({
    showModal: false,
    employeeInfo: {}
  })
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
      <button
        onClick={() =>
          setShowAddEmployeeModal({
            showModal: true,
            employeeInfo: undefined
          })
        }
      >
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
              <td>{employee.email}</td>
              <td>{employee.dateOfJoining}</td>
              <td>{employee.designation}</td>
              <td>
                <button onClick={() => EmployeeService.remove(employee.id)}>
                  delete
                </button>
                <button
                  onClick={() =>
                    setShowAddEmployeeModal({
                      showModal: true,
                      employeeInfo: employee
                    })
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RenderIf isVisible={showAddEmployeeModal.showModal}>
        <ShowAddEmployeeModal
          employeeInfo={showAddEmployeeModal.employeeInfo}
        />
      </RenderIf>
    </div>
  )
}

export default HRMS
