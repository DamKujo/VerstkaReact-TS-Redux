import React, { useState } from 'react';
import "./questionAndAnswer.css"
import { Question } from './questionAndAnswer';

interface Props{
    items: Question[];
}

export const OneQuestion: React.FC<Props> = ({items}) => {
    const [toggleStates, setToggleStates] = useState<boolean[]>(Array(items.length).fill(false));

    const handleToggle = (index: number) => {
        setToggleStates(prev => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    }

    return (
        <>
            {
                items.map((item, i) => (
                    <div key={i} className='full-one-question'>
                        <div className='' onClick={() => handleToggle(i)}>
                            <a className='question-body' data-bs-toggle="collapse" href={`#multiCollapseExample${i}`} role="button" aria-expanded="false" aria-controls={`#multiCollapseExample${i}`}>
                                <div className='question'>
                                    {item.title}
                                </div>
                                    {/* <img className={toggleStates[i] ? 'plus-img-active' : 'plus-img'} src="./../q&a/plus.svg" alt="" /> */}
                                <svg className={toggleStates[i] ? 'plus-img-active' : 'plus-img'} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="collapse" id={`multiCollapseExample${i}`}>
                            <div className="answer-text">
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
     );
     
}