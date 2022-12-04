import './modulesSwitcher.scss'
import { v4 as uid } from 'uuid'
import { modules } from '../../../../Constants'
import ActionCards from '../actionCards/ActionCards'

const ModuleSwitcher = ({ selectedModule, onModuleSelect }) => {
  return (
    <div className='action-container'>
      {modules.map((module) => (
        <ActionCards
          {...module}
          key={uid()}
          selectedModule={selectedModule}
          onModuleSelect={onModuleSelect}
        />
      ))}
    </div>
  )
}

export default ModuleSwitcher
