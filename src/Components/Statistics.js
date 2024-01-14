import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ringImage from './images/ring.png'


const Statistics = () => {
  const [displaySize, setDisplaySize] = useState(window.innerWidth);

  const chartRef = useRef();

  useEffect(() => {
    // <block:setup:1>
    const labels = ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Employer',
          data: [3, 6, 12, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100],
          backgroundColor: 'rgb(8, 24, 168)',
        },
        {
          label: 'Employee',
          data: [4, 8, 16, 25, 30, 35, 40, 50, 60, 65, 70, 80, 90, 100],
          backgroundColor: '#7F00FF',
        },
        {
          label: 'Total Interest',
          data: [9, 15, 20, 25, 35, 40, 45, 55, 65, 70, 75, 85, 90, 100],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
        },
      ]
    };
    // </block:setup>

    // <block:config:0>
    const config = {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          title: {
            display: true
          },
        },
        responsive: true,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            grid: {
              display: false,
            },
          }
        }
      }
    };
    // </block:config>

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  useEffect(() => {
    const handleResize = () => {
      setDisplaySize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='statistics-section'>
      <div className='statistics-box'>
        <div className="stc-1">
          <h5>Retirement Income</h5>
          <h3>Starting Year 2056</h3>
          {displaySize <= 960 ?
            <>
            <div className="stc-1a">
              <div className='stat_box_1'>
                <div className="stc-1aa">
                  <h2>$300,000</h2>
                  <h6>My Goal</h6>
                  <div className="line"></div>
                </div>
              </div>
              <div className='stat_box_2'>
                <div className="stc-1aa">
                  <h2>59%</h2>
                  <h6>Goal Achieved</h6>
                  <div className="line"></div>
                </div>
                <div className="temp">
                </div>
                <div className="stc-1aa">
                  <h2>$300</h2>
                  <h6>Est. Monthly Income</h6>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </>
          :
          <>
          <div className="stc-1a">
            <div className="stc-1aa">
              <h2>$300,000</h2>
              <h6>My Goal</h6>
              <div className="line"></div>
            </div>
            <div className="stc-1aa">
              <h2>59%</h2>
              <h6>Goal Achieved</h6>
              <div className="line"></div>
            </div>
            <div className="stc-1aa">
              <h2>$300</h2>
              <h6>Est. Monthly Income</h6>
              <div className="line"></div>
            </div>
          </div>
        </>
        }
        </div>
        <div className="stc-2" style={displaySize > 960 ? { maxHeight: '280px', width: '580px' } : { maxHeight: 'auto', width: '90vw' }}>
          <h3>Contributions Overtime</h3>
          <canvas id="myChart" ref={chartRef} ></canvas>
        </div>
        <div className="stc-3">
          <h3>How Do I Compare To My Peers?</h3>
          <h6>These numbers represent current goal achievement</h6>
          <div className="stc-3a">
            <div className="stc-3aa">
              <h5>Age:<span> Under 30 <FontAwesomeIcon icon={faAngleDown} /></span></h5>
              <div className="line"></div>
              <h5>Salary:<span> K 20-K 30 <FontAwesomeIcon icon={faAngleDown} /></span></h5>
              <div className="line"></div>
              <h5>Gender:<span> Male <FontAwesomeIcon icon={faAngleDown} /></span></h5>
              <div className="line"></div>
            </div>
            <div className="stc-3aa temp_1">
              <img className='ringImage' src={ringImage} alt="ring" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
