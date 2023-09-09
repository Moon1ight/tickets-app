import React from 'react'
import './styles.scss'
import Ticket from './Ticket'
import { TicketType } from '../../service/store/ticketsSlice'

type TicketsProps = {
    tickets: TicketType[]
}

const Tickets = ({tickets}: TicketsProps) => {
    return (
        <div className='tickets-list'>
            {tickets?.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
    )
}

export default Tickets