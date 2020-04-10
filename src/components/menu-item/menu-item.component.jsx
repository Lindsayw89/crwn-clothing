import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrlP, sizeP})=> (


    <div  className={`${sizeP} menu-item`}>

        <div className='background-image'
        style={{
            backgroundImage: `url(${imageUrlP})`}}/>
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>Shop Now</span>
    </div>
</div>
)

export default MenuItem