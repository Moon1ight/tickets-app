import React, { BaseSyntheticEvent } from 'react'
import './styles.scss'

type CheckboxProps = {
    name: string,
    label: string,
    isChecked: boolean,
    onChangeHandler: (e: BaseSyntheticEvent ) => void
}

const Checkbox = ({name, label, isChecked, onChangeHandler}: CheckboxProps) => {
    const selectCheckboxHandler = (e: BaseSyntheticEvent) => {
        onChangeHandler(e)
    }

    return (
        <label className='checkbox checkbox-label' htmlFor={name}>
            <input className='checkbox-item' type="checkbox" id={name} name={name} checked={isChecked} onChange={e => selectCheckboxHandler(e)}/>
            {label}
        </label>
    )
}

export default Checkbox