"use client";

import { useState } from "react";

export default function Pagination() {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(3);

    const onPrev = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const onNext = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (page < totalPage) {
            setPage(page + 1);
        }
    }




    return (
        <nav>
            <ul className="rbt-pagination">
                <li onClick={onPrev}><a href="#" aria-label="Previous"><i className="feather-chevron-left" /></a></li>
                {Array(totalPage).fill(0).map((_, index) => (
                    <li key={index} className={page == index + 1 ? "active" : ''} onClick={(e) => { e.preventDefault(); setPage(index + 1); }}><a href="#">{index + 1}</a></li>
                ))}
                {/* <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li> */}
                <li onClick={onNext}><a href="#" aria-label="Next"><i className="feather-chevron-right" /></a></li>
            </ul>
        </nav>
    )
}