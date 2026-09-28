import * as React from 'react';
import './style.css';

export default function Sup() {
    return(
        <sup className="sup">
            <img
            className="photo"
            src="https://415022.lp.tobiz.net/img/1575x1225/09812030b1f5adfd6cee561686d5e535.jpg"
            />
            <div className="title">
                <div className="headline_1">Если есть вопросы,</div>
                <div className="headline_2">напишите нам</div>
                <div className="headline_3">Мы ответим вам в ближайшее время</div>
            </div>

            <form className="contact-form">
                <label htmlFor="name"> Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введите ваше имя"
                />

                <label htmlFor="email"> Ваш email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введите ваше email"
                />

                <button type="submit">Написать</button>

                </form>
                <div className="sogl">
                    Нажимая на кнопку, Вы принимаете{' '}
                    <span className="underline">Положение</span>{' '}
                    и{' '}
                    <span className="underline">Согласие</span>{' '}
                    на обработку 
                    <p>персональных данных.</p>
                </div>
        </sup>
    );
}