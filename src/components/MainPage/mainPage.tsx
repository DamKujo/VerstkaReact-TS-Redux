import "./mainPage.css"
import HowItWorks from "../HowItWorks/howItWorks";
import BlockNumberThree from "../BlockNumThree/blockNumThree";
import Reviews from "../Reviews/reviews";
import QuestionAndAnswer from "../QuestionAndAnswer/questionAndAnswer";
import MicroCredit from "../Microcredit/microCredit";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import { useRef } from "react";

export default function MainPage(){
    // Логика для скролла
    const sectionRefOne = useRef(document.createElement("div"));

    const scrollToSection = () => {
        sectionRefOne.current.scrollIntoView({ behavior: 'smooth' });
    };

    const sectionRefTwo = useRef(document.createElement("div"));

    const scrollToSectionTwo = () => {
        sectionRefTwo.current.scrollIntoView({ behavior: 'smooth' });
    };

    const sectionRefThree = useRef(document.createElement("div"));

    const scrollToSectionThree = () => {
        sectionRefThree.current.scrollIntoView({ behavior: 'smooth' });
    };

    const sectionRefFour = useRef(document.createElement("div"));

    const scrollToSectionFour = () => {
        sectionRefFour.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className='main'>
                <div className='wrapper'>
                    <header>
                        <div className='icon-nav'>
                            <div className='icon'>
                                <img className='blue' src='./../icon/blue.svg'/>
                                <img src='./../icon/white.svg'/>
                            </div>
                            <p className='title'>testLab</p>
                        </div>
                        <div className='navigation'>
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <a className="nav-link" onClick={scrollToSection}>Как это работает</a>
                                        <a className="nav-link" onClick={scrollToSectionTwo}>3-й блок</a>
                                       <a className="nav-link" onClick={scrollToSectionThree}>Вопросы и ответы</a>
                                        <a className="nav-link" onClick={scrollToSectionFour}>Форма</a>
                                    </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <div className='main-title-subtitle'>
                        <h1>Говорят, никогда не поздно сменить профессию</h1>
                        <p>Сделай круто тестовое задание и у тебя получится</p>
                    </div>
                    <div className='button'>
                        <button className='btn btn-light'>Проще простого!</button>
                    </div>
                </div>
            </div>
            <div ref={sectionRefOne}><HowItWorks/></div>
            <div ref={sectionRefTwo}><BlockNumberThree/></div>
            <Reviews/>
            <div ref={sectionRefThree}><QuestionAndAnswer/></div>
            <MicroCredit/>
            <div ref={sectionRefFour}><Form/></div>
            <Footer/>
        </>
     );
}