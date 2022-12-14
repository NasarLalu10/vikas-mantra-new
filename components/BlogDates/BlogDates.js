import styles from './style.module.css'
import Link from 'next/link'

export const BlogDates = () => {
    return (
        <>
            <div className={styles.colBg + ' AnimeStarts '}>

                <h4 className='AnimeElement'>Latest Blog</h4>
                <hr />

                <Link href='/about/blog/blog2'>
                    <a className='AnimeElement'>BENEFITS OF YOGA FOR SCHOOL STUDENTS</a>
                </Link>
                <p className='greyText AnimeElement'>26-July-2022</p>

                <Link href='/about/blog/blog1'>
                    <a className='AnimeElement'>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</a>
                </Link>
                <p className='greyText AnimeElement'>26-July-2022</p>

            </div>
        </>
    )
}