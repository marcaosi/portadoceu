import React from 'react'

import styles from './styles.module.css'

export default function ({ children, color }){
    return (
        <div className={styles.container}>
            <h1 className={styles[color]}>{ children }</h1>
            <hr className={styles.hr} /> <span className={styles.circle} />
        </div>
    )
}