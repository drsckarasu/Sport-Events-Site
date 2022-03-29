import React from 'react';
import './modalInfo.scss';
import PropTypes from 'prop-types';

const ModalInfo = ({ description, closeModalInfo }) => {
  return (
    <div
      className="modal-info_background"
      onClick={() => closeModalInfo(false)}
      role="button"
      tabIndex="0"
      onKeyPress={closeModalInfo}
    >
      <div
        className="modal-info_container"
        onClick={e => e.stopPropagation()}
        role="button"
        tabIndex="0"
        onKeyPress={closeModalInfo}
      >
        <div className="modal-info_container_close-btn">
          <button
            type="button"
            className="close-btn"
            onClick={() => closeModalInfo(false)}
          >
            <span className="icon-cross"></span>
          </button>
        </div>

        <div className="modal-info_container_text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;

ModalInfo.propTypes = {
  closeModalInfo: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
