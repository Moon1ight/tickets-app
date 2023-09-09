import React from 'react'
import './styles.scss'
import BuyButton from '../buttons/BuyButton'
import { formatTime } from '../../service/utils'
import { TicketType } from '../../service/store/ticketsSlice'

type TicketProps = {
    ticket: TicketType
}

const Ticket = ({ticket}: TicketProps) => {
    const departureDate = new Date(ticket.departure).toLocaleDateString()
    const arrivalDate = new Date(ticket.arrival).toLocaleDateString()
    const formatTransfers = () => {
        const transfers = +ticket.transfersCount
        if (transfers === 1) {
            return ticket.transfersCount + " " + "пересадкa"
        }
        if (transfers > 1 && transfers < 5) {
            return ticket.transfersCount + " " + "пересадки"
        }
        if (transfers === 0 || transfers > 5) {
            return ticket.transfersCount + " " + "пересадок"
        }   
    }

    const buyHandler = () => {
        console.log('Купить билет с id: ', ticket.id)
    }

    return (
        <div className='ticket'>
            <div className='ticket-buy'>
                <div className='ticket-buy-company'>
                    <img src={ticket.companyLogo} alt="company"/>
                </div>
                <BuyButton onClickHandler={buyHandler} price={ticket.price}/>
            </div>
            <div className='ticket-info'>
                <div className='ticket-info-from'>
                    <div className='ticket-info-time'>{formatTime(ticket.departure)}</div>
                    <div className='ticket-info-place'>{ticket.from}</div>
                    <div className='ticket-info-date'>{departureDate}</div>
                </div>
                <div className='ticket-info-transfer'>
                    <div>{formatTransfers()}</div>
                    <div className='ticket-info-transfer-line'></div>
                </div>
                <div className='ticket-info-to'>
                    <div className='ticket-info-time'>{formatTime(ticket.arrival)}</div>
                    <div className='ticket-info-place'>{ticket.to}</div>
                    <div className='ticket-info-date'>{arrivalDate}</div>
                </div>
            </div>
        </div>
    )
}

export default Ticket