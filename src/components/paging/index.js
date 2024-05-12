import styles from './paging.module.css';
import { useState } from 'react';

const Paging = ({ setCurrentPage, currentPage, totalPages }) => {
    function handlePageChange(page) {
        if (page < 1 || page > totalPages) {
            return;
        }
        setCurrentPage(page);
    };

    function getFirstPage() {
        setCurrentPage(1);
    };

    function getLastPage() {
        setCurrentPage(totalPages);
    };

    return (
        <section className={ styles.paging }>
            {
                totalPages > 1 && (
                    <div className={ styles.container }>
                    <div className={ `${styles.button} ${styles.leftButton}` } onClick={ () => handlePageChange(currentPage - 1) } />

                    <div className={ `${styles.button} ${styles.firstPage} ${currentPage === 1 && styles.activePage}`} onClick={ () => getFirstPage() } >1</div>

                            <div className={ `${styles.button} ${ currentPage !== 1 && currentPage !==totalPages && styles.activePage} `  }>
                                { currentPage }
                            </div>

                    <div className={ `${styles.button} ${styles.lastPage} ${currentPage === totalPages && styles.activePage}` } onClick={ () => getLastPage() } >{ totalPages }</div>

                    <div className={ `${styles.button} ${styles.rightButton}` } onClick={ () => handlePageChange(currentPage + 1) } />
                    </div>    
                )
            }

        </section>
    )
};

export default Paging;