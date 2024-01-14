import React from 'react';
import profileImage from './images/profile.png'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className="profile-section">
        <div className="prof-1">
            <img src={profileImage} alt="profile" />
            <div className="name">
                <h5>Hi Mike,</h5>
                <p>welcome back.</p>
            </div>
        </div>
        <div className="prof-2">
            <h4>Today</h4>
            <div className="am">
                <h3>$19,892</h3>
                <p>Account Balance</p>
            </div>
            <div className="am">
                <h4>$4,000</h4>
                <p>Year-to-Date Contributions</p>
            </div>
            <div className="am">
                <h5>$1,892</h5>
                <p>Total Interest</p>
            </div>
            <button type="submit">I want to <FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
        <div className="prof-3">
            <h3>Recent Transactions</h3>
            <div className="tr-list">
                <p>2020-08-07</p>
                <h5>Withdrawal Transfer to Bank-XXX11</h5>
            </div>
            <div className="divider"></div>
            <div className="tr-list">
                <p>2020-07-21</p>
                <h5>Withdrawal Transfer to Bank-XXX11</h5>
            </div>
            <div className="divider"></div>
            <div className="tr-list">
                <p>2020-07-16</p>
                <h5>Withdrawal Transfer to Bank-XXX11</h5>
            </div>
        </div>
    </div>
  );
};

export default Profile;
