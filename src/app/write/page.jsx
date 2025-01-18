'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import styles from './write.module.css'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import ImageKit from 'imagekit'
const WritePage = () => {
   const [open, setOpen] = useState(false);
   const [file, setFile] = useState(null);
   const [value, setValue] = useState("");
   const [title, setTitle] = useState("");
   const [catSlug, setCatSlug] = useState("");
   const { data, status } = useSession();

   console.log(process.env.DATABASE_URL)

   const imagekit = new ImageKit({
      publicKey:  "",
      privateKey: "",
      urlEndpoint: "",
    });

   const router = useRouter();
   if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>
   }
   if (status !== "authenticated") {
      router.push('/login');
   }
   const slugify = (str) =>
      str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
   
   const handleSubmit = async () => {
      if (!file) {
        console.error("No file selected");
        return; // Exit if no file is selected
      }
    
      try {
        // Upload the file to ImageKit
        const response = await imagekit.upload({
          file: file,
          fileName: file.name,
        });
    
        // Prepare the post data
        const postData = {
          title,
          desc: value,
          img: response.url,
          slug: slugify(title),
          catSlug: catSlug || "style", // If not selected, choose the general category
        };
    
        // Send the post data to your API
        const res = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
    
        // Check the response status
        if (res.status === 200) {
          const data = await res.json();
          router.push(`/posts/${data.slug}`);
        } else {
          console.error('Error:', await res.text()); // Log the error response for debugging
        }
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };
    

  
   return (
      <div className={styles.container}>
         <input type="text" placeholder='Title' className={styles.input} onChange={(e) => setTitle(e.target.value)} />
         <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
            <option value="style">style</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
         </select>
         <div className={styles.editor}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
               <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            {
               open && (
                  <div className={styles.add}>
                     <input
                        type="file"
                        id="image"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                     />
                     <button className={styles.addButton}>
                        <label htmlFor="image">
                           <Image src="/image.png" alt="" width={16} height={16} />
                        </label>
                     </button>
                     <button className={styles.addButton}>
                        <Image src="/external.png" alt="" width={16} height={16} />
                     </button>
                     <button className={styles.addButton}>
                        <Image src="/video.png" alt="" width={16} height={16} />
                     </button>
                  </div>
               )
            }
            <ReactQuill
               className={styles.textArea}
               theme='bubble' value={value} onChange={setValue} placeholder='Tell your story' />
         </div>
         <button className={styles.publish} onClick={handleSubmit}>Publish</button>
      </div>
   )
}

export default WritePage