import { useEffect, useState } from 'react'

const HRMS = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {}, [])
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Eddie</td>
            <td>Top Stylist</td>
            <td>Edit Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HRMS
