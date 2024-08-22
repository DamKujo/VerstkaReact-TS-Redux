import "./howItWorks.css"

const HowItWorks = () => {
    return (
        <div className='content'>
            <div className='wrapper'>
                <div className='content-title'>
                <h2>Как это работает</h2>
                </div>
                <div className='steps'>
                    <div className="row svpx">
                        <div className="col width">
                            <div className='img'>
                                <img src="./../steps/1.svg" alt="waiting" />
                            </div>
                            <div className='text-under-img'>
                                <p className='title-text'>Прочитай задание внимательно</p>
                                <p className='under-title-text'>Думаю у тебя не займет это больше двух-трех минут</p>
                            </div>
                        </div>
                        <div className="col width">
                            <div className='img'>
                                <img src="./../steps/2.svg" alt="truck" />
                            </div>
                            <div className='text-under-img'>
                                <p className='title-text'>Изучи весь макет заранее</p>
                                <p className='under-title-text'>Подумай как это будет работать на разных разрешениях и при скролле</p>
                            </div>
                        </div>
                        <div className="col width">
                            <div className='img'>
                                <img src="./../steps/3.svg" alt="security" />
                            </div>
                            <div className='text-under-img'>
                                <p className='title-text'>Сделай хорошо</p>
                                <p className='under-title-text'>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
                            </div>
                        </div>
                        <div className="col width">
                            <div className='img'>
                                <img src="./../steps/4.svg" alt="moneyBags" />
                            </div>
                            <div className='text-under-img'>
                                <p className='title-text'>Получи предложение</p>
                                <p className='under-title-text'>Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;