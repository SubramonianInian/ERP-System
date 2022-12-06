import { useForm } from 'react-hook-form'
import { EmployeeService } from '../../../services/dataBaseService'
const ShowAddEmployeeModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    await EmployeeService.create(data)
  }
  //   console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='First Name' {...register('firstName')} />
      <input type='text ' placeholder='Last Name' {...register('lastName')} />
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
