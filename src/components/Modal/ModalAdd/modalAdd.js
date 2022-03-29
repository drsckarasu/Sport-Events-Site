import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './modalAdd.scss';
import sportImages from '../../../constants/constants';

const ModalAdd = ({ closeModal, setDashboard, dashboard }) => {
  const ERROR_INPUT = 'This field cannot be empty';
  const [inputTitle, setInputTitle] = useState('');
  const [textareaText, setTextareaText] = useState('');
  const [labelText, setLabelText] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [titleInputDirty, setTitleInputDirty] = useState(false);
  const [titleInputError, setTitleInputError] = useState(ERROR_INPUT);
  const [textAreaInputDirty, setTextAreaInputDirty] = useState(false);
  const [textAreaInputError, setTextAreaInputError] = useState(ERROR_INPUT);
  const [datePickerDirty, setDatePickerDirty] = useState(false);
  const [datePickerError, setDatePickerError] = useState(
    'You must choose date',
  );
  const [selectTypeDirty, setSelectTyperDirty] = useState(false);
  const [selectTypeError, setSelectTypeError] = useState(
    'You must choose type of event',
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      titleInputError ||
      textAreaInputError ||
      datePickerError ||
      selectTypeError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleInputError, textAreaInputError, datePickerError, selectTypeError]);

  const timeHandler = e => {
    const dateNow = new Date();
    if (new Date(e.target.value).getTime() < dateNow.getTime()) {
      setDatePickerError('You cannot choose past date');
    } else {
      setDatePickerError('');
    }
    setTimeInput(e.target.value);
  };

  const inputTitleHandler = e => {
    setInputTitle(e.target.value);
    if (e.target.value.length < 5) {
      setTitleInputError('Title must be at least 5 characters');
      if (!e.target.value) {
        setTitleInputError(ERROR_INPUT);
      }
    } else {
      setTitleInputError('');
    }
  };

  const textareaTextHandler = e => {
    setTextareaText(e.target.value);
    if (e.target.value.length < 20) {
      setTextAreaInputError('Description must be at least 20 characters');
      if (!e.target.value) {
        setTextAreaInputError('This field cannot be empty');
      }
    } else {
      setTextAreaInputError('');
    }
  };

  const labelTextHandler = e => {
    setLabelText(e.target.value);
    if (e.target.value) {
      setSelectTypeError('');
    }
  };

  const submitDashboardHandler = e => {
    console.log(timeInput);
    e.preventDefault();
    setDashboard([
      ...dashboard,
      {
        label: labelText,
        title: inputTitle,
        description: textareaText,
        time: new Date(timeInput).getTime(),
        img: sportImages[labelText],
        id: Math.random() * 1000,
      },
    ]);
    setInputTitle('');
    setTextareaText('');
    setLabelText('');
    setTimeInput('');
    closeModal();
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case 'title':
        setTitleInputDirty(true);
        break;
      case 'textArea':
        setTextAreaInputDirty(true);
        break;
      case 'datePicker':
        setDatePickerDirty(true);
        break;
      case 'selectType':
        setSelectTyperDirty(true);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="modal-add_background"
      onClick={() => closeModal(false)}
      role="button"
      tabIndex="0"
      onKeyPress={closeModal}
    >
      <div
        className="modal-add_container"
        onClick={e => e.stopPropagation()}
        role="button"
        tabIndex="0"
        onKeyPress={closeModal}
      >
        <div className="modal-add_container_close-btn">
          <button
            type="button"
            className="close-btn"
            onClick={() => closeModal(false)}
          >
            <span className="icon-cross"></span>
          </button>
        </div>
        <div className="modal-add_container_title">
          <h2>New Sport Event</h2>
        </div>
        <form
          onSubmit={submitDashboardHandler}
          className="modal-add_container_form"
        >
          <input
            value={inputTitle}
            onChange={inputTitleHandler}
            onBlur={blurHandler}
            type="text"
            placeholder="Title"
            name="title"
          />
          {titleInputDirty && titleInputError && (
            <p style={{ color: 'red' }}>{titleInputError}</p>
          )}
          <textarea
            value={textareaText}
            onChange={textareaTextHandler}
            onBlur={blurHandler}
            placeholder="Description"
            maxLength="200"
            name="textArea"
          ></textarea>
          {textAreaInputDirty && textAreaInputError && (
            <p style={{ color: 'red' }}>{textAreaInputError}</p>
          )}
          <label htmlFor="time">
            Choose date:
            <input
              onChange={timeHandler}
              onBlur={blurHandler}
              value={timeInput}
              type="date"
              id="time"
              name="datePicker"
            ></input>
          </label>
          {datePickerDirty && datePickerError && (
            <p style={{ color: 'red' }}>{datePickerError}</p>
          )}
          <label htmlFor="type-event">
            Type of Event
            <select
              onChange={labelTextHandler}
              onBlur={blurHandler}
              name="selectType"
              id="type-event"
            >
              <option value="">Select event</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Hockey">Hockey</option>
              <option value="Racing">Racing</option>
            </select>
          </label>
          {selectTypeDirty && selectTypeError && (
            <p style={{ color: 'red' }}>{selectTypeError}</p>
          )}
          <div className="modal-add_container_form_btns">
            <button
              className="cancel-btn"
              type="button"
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
            <button disabled={!formValid} type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;

ModalAdd.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setDashboard: PropTypes.func.isRequired,
  dashboard: PropTypes.array.isRequired,
};
