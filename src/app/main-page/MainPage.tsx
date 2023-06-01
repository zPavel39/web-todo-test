import React, { useState } from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import FormTask from '../../components/form-task/FormTask'
import ListTask from '../../components/list-task/ListTask'
import Modal from '../../components/modal/Modal'


const MainPage = () => {

  const [activeModal, setActiveModal ] = useState(false)

  return (
    <div className='Main'>
        <Header/>
        <FormTask setActiveModal={setActiveModal} activeModal={activeModal}/>
        <ListTask setActiveModal={setActiveModal} activeModal={activeModal}/>
        {activeModal === true && (<Modal setActiveModal={setActiveModal} activeModal={activeModal}/>)}
    </div>
  )
}

export default MainPage