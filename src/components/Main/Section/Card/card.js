import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import ModalInfo from '../../../Modal/ModalInfo/modalInfo';

const Card = ({ label, img, title, time, description }) => {
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let day = new Date(time).getDate();
  const month = months[new Date(time).getMonth()];
  if (day < 10) {
    day = `0${day}`;
  }
  return (
    <>
      <div
        className="card"
        onClick={() => setOpenModalInfo(true)}
        role="button"
        tabIndex="0"
        onKeyPress={setOpenModalInfo}
      >
        <div
          className="card_content"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="label">
            <p>{label}</p>
          </div>
        </div>
        <div className="card_text">
          <p className="text">{title}</p>

          <p className="time">
            <span>{day}</span>
            <span>{month}</span>
          </p>
        </div>
      </div>

      {openModalInfo && (
        <ModalInfo
          closeModalInfo={setOpenModalInfo}
          description={description}
        />
      )}
    </>
  );
};

export default Card;

Card.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
