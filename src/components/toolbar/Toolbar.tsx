import React, {BaseSyntheticEvent, useState} from 'react'
import './styles.scss'
import Checkbox from '../checkbox/Checkbox'
import { CategoriesType } from '../../App'

type ToolbarProps = {
    categories: CategoriesType,
    onChangeHandler: (e: BaseSyntheticEvent ) => void
}

type ButtonsType = {
    [key: string]: boolean
}

const Toolbar = ({categories, onChangeHandler}: ToolbarProps) => {
    const [buttons, setButtons] = useState<ButtonsType>({
        rub: false,
        usd: false,
        eur: false,
    })
    
    const onCurrencyClickHandler = (e: BaseSyntheticEvent) => {
        const btnText = e.target.innerText.toLowerCase()
        setButtons({...buttons, [btnText]: !buttons[btnText]})
    }

    return (
        <div className='tickets-toolbar'>
            <div className='tickets-toolbar-currency'>
                <div className='tickets-toolbar-title'>Валюта</div>
                <div className='tickets-toolbar-currency-buttons'>
                    <div className={buttons.rub ? "active" : undefined} onClick={(e) => onCurrencyClickHandler(e)}>Rub</div>
                    <div className={buttons.usd ? "active" : undefined} onClick={(e) => onCurrencyClickHandler(e)}>Usd</div>
                    <div className={buttons.eur ? "active" : undefined} onClick={(e) => onCurrencyClickHandler(e)}>Eur</div>
                </div>
            </div>
            <div className='tickets-toolbar-transfer'>
                <div className='tickets-toolbar-title'>Количество пересадок</div>
                <div>
                    <Checkbox isChecked={categories["all"]} name="all" label="Все" onChangeHandler={onChangeHandler}/>
                    <Checkbox isChecked={categories["0"]} name="0" label="Без пересадок" onChangeHandler={onChangeHandler}/>
                    <Checkbox isChecked={categories["1"]} name="1" label="1 пересадка" onChangeHandler={onChangeHandler}/>
                    <Checkbox isChecked={categories["2"]} name="2" label="2 пересадки" onChangeHandler={onChangeHandler}/>
                    <Checkbox isChecked={categories["3"]} name="3" label="3 пересадки" onChangeHandler={onChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default Toolbar