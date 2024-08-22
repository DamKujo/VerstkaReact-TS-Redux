
import { forwardRef } from "react";
import "./blockNumThree.css"

const BlockNumberThree = forwardRef((props, ref) => {
    return (
        <div className='content blockthree'>
            <div className='wrapper'>
                <div className="row plus" ref={ref}>
                    <div className="col one">
                        <div className='content-title'>
                            <h3>Круто, ты дошел до третьего блока</h3>
                        </div>
                        <div className='text-under-title'>
                            <p className='title-text-three'>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
                            <p className='title-text-three'>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
                        </div>
                    </div>
                    <div className="col two">
                        <img className='img-men' src="./../3block/men.png" alt="men" />
                        <img className='img-machine' src="./../3block/machine.png" alt="machine" />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default BlockNumberThree;