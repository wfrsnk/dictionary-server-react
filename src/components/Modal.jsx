import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ active, setActive, newTerm }) => {
  const [changeHandlerTerm, setChangeHandlerTerm] = useState('');
  const [changeHandlerDescription, setChangeHandlerDescription] = useState('');

  const getInputTerm = (event) => {
    setChangeHandlerTerm(event.target.value);
  };

  const getInputDescription = (event) => {
    setChangeHandlerDescription(event.target.value);
  };
  //очистка инпутов
  const clearInputs = () => {
    setChangeHandlerTerm('');
    setChangeHandlerDescription('');
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modalContent active' : 'modalContent '}
        onClick={(e) => e.stopPropagation()}>
        <div className="formContainer">
          <div>Термин</div>

          <input className="input" type="text" value={changeHandlerTerm} onInput={getInputTerm} />

          <div>Определение</div>

          <input
            className="input description"
            type="text"
            value={changeHandlerDescription}
            onInput={getInputDescription}
          />
          <div className="btn">
            <div className="btn">
              <button
                className={`button save`}
                onClick={
                  changeHandlerTerm !== '' && changeHandlerDescription !== ''
                    ? function (event) {
                        setActive(false);
                        newTerm(uuidv4(), changeHandlerTerm, changeHandlerDescription);
                        clearInputs();
                      }
                    : () => setActive(false)
                }>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
