import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
             <Image src='/yha-logo-edit.png' alt="my logo" width={50} height={50} />
             <h1 className={styles.logoText}>WanderVerse</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit perferendis inventore sit incidunt tenetur dignissimos possimus quasi architecto, quo veniam eos eius recusandae alias natus dolorum molestiae, iusto laborum?
        </p>
        {/* <div className={styles.icons}>
          <Image src="/facebook.png"  alt='' width={18} height={18}/>
          <Image src="/instagram.png"  alt='' width={18} height={18}/>
          <Image src="/tiktok.png"  alt='' width={18} height={18}/>
          <Image src="/youtube.png"  alt='' width={18} height={18}/>
        </div> */}
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
           <span className={styles.listTitle}>Links</span>
           <Link href="/">Homepage</Link>
           <Link href="/">Blog</Link>
           <Link href="/">About</Link>
           <Link href="/">Contact</Link>
        </div> 
        <div className={styles.list}>
           <span className={styles.listTitle}>Tags</span>
           <Link href="/">Style</Link>
           <Link href="/">Fashion</Link>
           <Link href="/">Coding</Link>
           <Link href="/">Travel</Link>
        </div> 
        <div className={styles.list}>
           <span className={styles.listTitle}>Socail</span>
           <Link href="/">Facebook</Link>
           <Link href="/">Instagram</Link>
           <Link href="/">Tiktok</Link>
           <Link href="/">Youtube</Link>
        </div> 

      </div>
    </div>
  )
}

