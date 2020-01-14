import React from 'react'




const Filter = props => {

    const onClickHandler = e => {
        props.onClickHandler(e.target.value)
    }

    return <div className='content'>
        <form className='content__form'>
            <input
                className='content__form--input'
                name='filter'
                type='search'
                onChange={onClickHandler}
                placeholder='Search...'
                id='search'
            />
        </form>
    </div>
}

export default Filter