import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './listItem.scss';
import ModalEdit from '../../Modal/ModalEdit/modalEdit';

const ListItem = ({
  label,
  img,
  title,
  time,
  dashboard,
  setDashboard,
  item,
  description,
}) => {
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const deleteHandler = () => {
    setDashboard(dashboard.filter(el => el.id !== item.id));
  };
  const updateHandler = () => {
    setDashboard(
      dashboard.map(el => {
        if (el.id === item.id) {
          return el;
        }
        return el;
      }),
    );
    setOpenModalInfo(true);
  };

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
      <div className="list-item">
        <div className="list-item_img">
          <img src={`${img}`} alt="sport-event-img" />
        </div>

        <div className="list-item_info">
          <p className="time">
            <span>{day}</span>
            <span>{month}</span>
          </p>
          <p className="label">{label}</p>

          <p className="text">{title}</p>
        </div>
        <div className="list-item_btns">
          <button className="delete-btn" type="button" onClick={deleteHandler}>
            Delete
          </button>
          <button type="button" onClick={updateHandler}>
            Edit
          </button>
          {openModalInfo && (
            <ModalEdit
              closeModalInfo={setOpenModalInfo}
              label={label}
              img={img}
              title={title}
              time={time}
              dashboard={dashboard}
              setDashboard={setDashboard}
              item={item}
              description={description}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ListItem;

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  dashboard: PropTypes.array.isRequired,
  setDashboard: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};
