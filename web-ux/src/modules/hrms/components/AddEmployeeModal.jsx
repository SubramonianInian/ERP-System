import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { EmployeeService } from '../../../services/dataBaseService'
const ShowAddEmployeeModal = ({ employeeInfo }) => {
  const fields = [
    'firstName',
    'lastName',
    'dob',
    'address',
    'email',
    'dateOfJoining',
    'designation'
  ]
  const isEdit = employeeInfo
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (payload) => {
    if (isEdit) {
      await EmployeeService.update(employeeInfo.id, payload)
    } else {
      await EmployeeService.create(payload)
    }
  }

  useEffect(() => {
    if (isEdit) {
      fields.forEach((field) => setValue(field, employeeInfo[field]))
    } else {
      fields.forEach((field) => setValue(field, ''))
    }
  }, [employeeInfo])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='First Name' {...register('firstName')} />
      <input type='text' placeholder='Last Name' {...register('lastName')} />
      <input type='text' placeholder='Date of Birth' {...register('dob')} />
      <input type='text' placeholder='Address' {...register('address')} />
      <input type='text' placeholder='Email Address' {...register('email')} />
      <input
        type='text'
        placeholder='Date of Joining'
        {...register('dateOfJoining')}
      />
      <input
        type='text'
        placeholder='Designation'
        {...register('designation')}
      />

      <input type='submit' />
    </form>
  )
}

export default ShowAddEmployeeModal
