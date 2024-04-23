import React from 'react'
import styles from './article.module.css'

export default function TeamMember({img, firstName, lastName, jobRole, email, phoneNumber}) {
  return (
    <div>
        <article className={styles.article}>
            <img src={img} alt="teammember"></img>
            <div>
                <h2>{firstName} {lastName}</h2>
                <h3>{jobRole}</h3>
                <p>{email}</p>
                <p>{phoneNumber}</p>
            </div>
        </article>
    </div>
  )
}