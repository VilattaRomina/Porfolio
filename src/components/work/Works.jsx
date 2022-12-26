import React from 'react'
import {  proyectsData } from './Data'
import WorkItem from './WorkItem'

const Works = () => {
    return (
        <div>

            <div className='work__container  container grid'>
                {proyectsData.map((item) => {
                    return <WorkItem  item={item} key={item.id}/>
                })}
            </div>

        </div>

    )
}

export default Works