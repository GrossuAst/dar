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
            <div className={ styles.container }>
                <div className={ `${styles.button} ${styles.leftButton}` } onClick={ () => handlePageChange(currentPage - 1) } />

                <div className={ `${styles.button} ${styles.firstPage}` } onClick={ () => getFirstPage() } >1</div>

                        <div className={ `${styles.button} ${styles.activePage}`  }>
                            { currentPage }
                        </div>

                <div className={ `${styles.button} ${styles.lastPage}` } onClick={ () => getLastPage() } >{ totalPages }</div>

                <div className={ `${styles.button} ${styles.rightButton}` } onClick={ () => handlePageChange(currentPage + 1) } />
            </div>
        </section>
    )
};

export default Paging;