import "./questionAndAnswer.css"
import {OneQuestion} from "./question";

export interface Question{
    title: string;
    text: string;
}

const listOfQuestions: Question[] = [
    {
        title: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
        text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
    },
    {
        title: 'Прототип нового сервиса - это как трубный призыв?',
        text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
    },
    {
        title: 'Частокол на границе продолжает удивлять?',
        text: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        title: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
        text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
    },
    {
        title: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
        text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
    },
    {
        title: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
        text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
    },
    {
        title: 'Высококачественный прототип будущего проекта обнадёживает?',
        text: 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
    },
]

const QuestionAndAnswer = () => {
    return (
        <div className='content'>
            <div className='wrapper'>
                <div className='content-title'>
                    <h2>Вопросы и ответы</h2>
                </div>
                <div className='all-questions'>
                    <OneQuestion items={listOfQuestions}/>
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAnswer;