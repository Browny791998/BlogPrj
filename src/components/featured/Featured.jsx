import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>This is Tech Blog</b> Discover new latest things about technology.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Iphone 99 is released soon.It will come to your city in the nearest future.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum itaque asperiores voluptatibus! Rerum assumenda illum non doloribus consectetur omnis consequatur excepturi dolore, nesciunt enim dolor ea earum voluptatum tempore?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      </div>

  )
}

