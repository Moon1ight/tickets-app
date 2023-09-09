import React from 'react'
import './styles.scss'

type ButtonProps = {
    onClickHandler: () => void
    price: string
}

const BuyButton = ({price, onClickHandler}: ButtonProps) => {
  const formatPrice = new Intl.NumberFormat("ru-RU").format(+price)
  return (
    <div className='button button-buy' onClick={onClickHandler}>
        <div>Купить</div>
        <div>за <span>{formatPrice} ₽</span></div>
    </div>
  )
}

export default BuyButton