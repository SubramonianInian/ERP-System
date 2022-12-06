import { IconContext } from 'react-icons'
import { FaRegEdit } from 'react-icons/ai'
export const EditIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div>
        <FaRegEdit />
      </div>
    </IconContext.Provider>
  )
}
