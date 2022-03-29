import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './adminPage.scss';
import ModalAdd from '../Modal/ModalAdd/modalAdd';
import List from './List/list';

const AdminPage = ({ dashboard, setDashboard }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="admin-page">
      <div className="admin-page_content">
        <div className="admin-page_content_inputs">
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="open-btn"
          >
            <span className="icon-cross"></span>
          </button>
          {openModal && (
            <ModalAdd
              closeModal={setOpenModal}
              dashboard={dashboard}
              setDashboard={setDashboard}
            />
          )}
        </div>
        <List
          dashboard={dashboard}
          setDashboard={setDashboard}
          closeModal={setOpenModal}
        />
      </div>
    </div>
  );
};

export default AdminPage;

AdminPage.propTypes = {
  dashboard: PropTypes.array.isRequired,
  setDashboard: PropTypes.func.isRequired,
};
