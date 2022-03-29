import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './modalEdit.scss';
import sportImages from '../../../constants/constants';

const ModalEdit = ({ closeModalInfo,
    label,
    title,
    time,
    description,
    dashboard,
    setDashboard,
    item }) => {
      const [editTitle, setEditTitle] = useState(title);
      const [editText, setEditText] = useState(description);
      const [editLabel, setEditLabel] = useState(label);
      const [editTime, setEditTime] = useState(new Date(time).toISOString().slice(0, 10));
      console.log(dashboard, item);
      const editTitleHandler = e => {

        setEditTitle(e.target.value);
      }
      const editTextHandler = e => {

        setEditText(e.target.value);
      }
      const editLabelHandler = e => {

        setEditLabel(e.target.value);
      }
      const editTimeHandler = e => {

        setEditTime(e.target.value);
      }
      const submitEditItemHandler = e => {
        e.preventDefault();
        setDashboard(dashboard.map(el => {
          if (el.id === item.id) {
            return {
              ...item,
              label: editLabel,
              title: editTitle,
              description: editText,
              time: new Date(editTime).getTime(),
              img: sportImages[editLabel],
            };
          }
          return el;
        }))
        closeModalInfo();
      };

  return (
    <div
      className="modal-add_background"
      onClick={() => closeModalInfo(false)}
      role="button"
      tabIndex="0"
      onKeyPress={closeModalInfo}
    >
      <div
        className="modal-add_container"
        onClick={e => e.stopPropagation()}
        role="button"
        tabIndex="0"
        onKeyPress={closeModalInfo}
      >
        <div className="modal-add_container_close-btn">
          <button
            type="button"
            className="close-btn"
            onClick={() => closeModalInfo(false)}
          >
            <span className="icon-cross"></span>
          </button>
        </div>
        <div className="modal-add_container_title">
          <h2>New Sport Event</h2>
        </div>
        <form
          onSubmit={submitEditItemHandler}
          className="modal-add_container_form"
        >
          <input
            value={editTitle}
            onChange={editTitleHandler}
            type="text"
            placeholder="Title"
            name="title"
          />
          <textarea
            value={editText}
            onChange={editTextHandler}
            placeholder="Description"
            maxLength="200"
            name="textArea"
          ></textarea>
          <label htmlFor="time">
            Choose date:
            <input
              value={editTime}
              onChange={editTimeHandler}
              type="date"
              id="time"
              name="datePicker"
            ></input>
          </label>
          <label htmlFor="type-event">
            Type of Event
            <select
              name="selectType"
              id="type-event"
              value={editLabel}
              onChange={editLabelHandler}
            >
              <option value="">Select event</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Hockey">Hockey</option>
              <option value="Racing">Racing</option>
            </select>
          </label>
          <div className="modal-add_container_form_btns">
            <button
              className="cancel-btn"
              type="button"
              onClick={() => closeModalInfo(false)}
            >
              Cancel
            </button>
            <button type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;

ModalEdit.propTypes = {
  closeModalInfo: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  dashboard: PropTypes.array.isRequired,
  setDashboard: PropTypes.func.isRequired,
  item: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired
};
