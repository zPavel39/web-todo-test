import React, { useState } from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import FormTask from '../../components/form-task/FormTask'
import ListTask from '../../components/list-task/ListTask'
import Modal from '../../components/modal/Modal'
import langStore from './../../store/interpreter/interpreter'
import { observer } from 'mobx-react-lite'


const MainPage = observer(() => {
  
  const { translate } = langStore
  const [activeModal, setActiveModal ] = useState(false)

  return (
    <div className='Main'>
        <Header />
        <FormTask setActiveModal={setActiveModal} activeModal={activeModal} translate={translate}/>
        <ListTask setActiveModal={setActiveModal} activeModal={activeModal} translate={translate}/>
        {activeModal === true && (<Modal setActiveModal={setActiveModal} activeModal={activeModal} translate={translate}/>)}
    </div>
  )
})

export default MainPage