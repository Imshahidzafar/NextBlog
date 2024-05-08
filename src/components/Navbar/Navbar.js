import React from 'react';
import Link from "next/link";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {  
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ShahidDev</div>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar