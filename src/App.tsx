import React, {useState, useEffect, BaseSyntheticEvent} from 'react';
import './App.scss';
import Toolbar from './components/toolbar/Toolbar';
import Tickets from './components/tickets/Tickets';
import { fetchTickets } from './service/store/ticketsSlice';
import { useAppDispatch, useAppSelector } from './service/hook';
import Loader from './components/loader/Loader';


export type CategoriesType = {
  [key: string]: boolean
}

function App() {
  const [categories, setCategories] = useState<CategoriesType>({
    all: true, 
    0: false, 
    1: false, 
    2: false, 
    3: false
  })

  const {tickets, status, error} = useAppSelector(state => state.tickets)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  },[dispatch])

  // Сортировка билетов по количеству пересадок
  const onChangeHandler = (e: BaseSyntheticEvent ) => {
    const {name} = e.target
    if (name === "all") {
      if (categories["all"] === true) {
        setCategories({all: false, 0: false, 1: false, 2: false, 3: false})
      } else {
        setCategories({all: true, 0: true, 1: true, 2: true, 3: true})
      }
    } else {
      setCategories({...categories, ["all"]: false, [name]: !categories[name]})
    }
  }
  const checkedTickets = Object.entries(categories).filter(category => category[1]).map(category => category[0])
  const filteredTickets = tickets.filter(({transfersCount}) => {
    return checkedTickets.includes(transfersCount)
  })

  return (
    <div className="tickets">
      <div className="container">
        <div className='tickets-logo'>
          <img alt="logo" src="./assets/logo.png"/>
        </div>
        <div className='tickets-content'>
          <div className='tickets-content-toolbar'>
            <Toolbar categories={categories} onChangeHandler={onChangeHandler}/>
          </div>
          <div className='tickets-content-tickets'>
            {status === "loading" && <Loader />}
            {error && <div>{error.message}</div>}
            <Tickets tickets={filteredTickets.length === 0 ? tickets : filteredTickets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
