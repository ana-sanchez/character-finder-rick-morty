import React from 'react'
import Icon from '@material-ui/core/Icon';



const Filter = props => {

    const onClickHandler = e => {
        props.onClickHandler(e.target.value)
    }

    return <div className='content' id='search-wrapper'>
        <form className='content__form'>
            <input
                className='content__form--input'
                name='filter'
                type='search'
                onChange={onClickHandler}
            />
        </form>

    </div>

}

export default Filter