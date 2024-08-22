import React, { forwardRef, useState } from 'react';
import "./Form.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState, FormState, AppDispatch, toSendForm, turnIsSend } from './../../store/store';


const Form = forwardRef((props, ref) => {
    const [nameForm, setNameForm] = useState('');
    const [numberForm, setNumberForm] = useState('');
    const [agreementForm, setAgreementForm] = useState(false);
    const [error, setError] = useState('');
    const [dataFromForm, setDataFromForm] = useState<FormState>({
        name: '',
        number: '',
        agreement: false,
    });
    const form = useSelector((state: RootState) => state.form.isSend);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddForm = () => {
        setError('');
        // Валидация
        if (nameForm.trim().length < 2) {
            setError('Имя должно содержать минимум 2 символа');
            return;
        }
        const phonePattern = /^[+]?[0-9]{10,15}$/;
        if (!phonePattern.test(numberForm.trim())) {
            setError('Введите корректный номер телефона (10-15 цифр)');
            return;
        }
        if (!agreementForm) {
            setError('Необходимо согласиться с условиями');
            return;
        }
        const newData = {
            name: nameForm,
            number: numberForm,
            agreement: agreementForm
        };
        setDataFromForm(newData);
        setAgreementForm(false);
        setNameForm('');
        setNumberForm('');
        dispatch(toSendForm(newData));
        dispatch(turnIsSend());
    };

    return (
        <div className='content'>
            <div className='wrapper'>
                <div className='content-title' ref={ref}>
                    <h2>Отправь форму</h2>
                </div>
                <div className='form'>
                    <div className="row dspl">
                        <div className="col"> 
                            <input type="text" className="form-control" value={nameForm} onChange={(e) => setNameForm(e.target.value)} placeholder="Имя" aria-label="Имя" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={numberForm} onChange={(e) => setNumberForm(e.target.value)} placeholder="Телефон" aria-label="Телефон" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                    </div>
                    <div className="row mrgtopform dspl">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={() => setAgreementForm(agreement => !agreement)} checked={agreementForm} id="invalidCheck" required/>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Согласен, отказываюсь
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            {form ? 
                                <button onClick={handleAddForm} type='button' className='btn btn-success btnform' disabled>Отправлено</button>
                                : 
                                <button onClick={handleAddForm} type='button' className='btn btn-primary btnform'>Отправить</button>
                            }
                        </div>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        </div>
     );
});

export default Form;
