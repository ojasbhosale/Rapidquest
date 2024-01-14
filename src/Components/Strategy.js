import React, { useEffect, useState } from 'react';


const Strategy = () => {
  const [displaySize, setDisplaySize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDisplaySize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    updatePercentage('employeeContributionSlider', 'employeeContributionPercentage', 12);
    updatePercentage('retirementAgeSlider', 'retirementAgePercentage', 65);
  }, []);

  function updatePercentage(sliderId, percentageId, defaultValue) {
    const slider = document.getElementById(sliderId);
    const percentage = document.getElementById(percentageId);

    slider.value = defaultValue; // Set default value

    if (sliderId !== "retirementAgePercentage") {
      percentage.textContent = `${defaultValue}%`;
    } else {
      percentage.textContent = `${defaultValue}`;
    }

    slider.addEventListener('input', function () {
      if (sliderId !== "retirementAgePercentage") {
        percentage.textContent = `${slider.value}%`;
      } else {
        percentage.textContent = `${slider.value}`;
      }
    });
  }

  return (
    <div className="retirement_strategy">
      <div className="card">
        <h2 className="card_title">
          Retirement Strategy
        </h2>

        <p className="attributes">
          Employee Contribution
        </p>
        <div className="set">
          <input className="range_input" type="range" min="0" max="100" value="12" id="employeeContributionSlider" />
          <p className="percentage val" id="employeeContributionPercentage">12%</p>
        </div>

        <p className="attributes">
          Retirement Age
        </p>
        <div className="set">
          <input className="range_input" type="range" min="0" max="100" value="65" id="retirementAgeSlider" />
          <p className="percentage val" id="retirementAgePercentage">65</p>
        </div>

        <div className="line"></div>

        <div className="set">
          <p className="attributes">
            Employer Contribution
          </p>

          <p className="val">8.4%</p>
        </div>

        <div className="set">
          <p className="attributes">
            Interest Rate
          </p>

          <p className="val">5%</p>
        </div>

        <div className="center_box">
          <input className="btn_class" type="button" value="Update" />
          <br />
          <a href="https://www.linkedin.com/in/ojas-bhosale-51103a251" className="link"View Help Docs> </a>
        </div>
      </div>

      {displaySize > 960 &&
        <div className="info_tags">
        <p className="info_normal">
          Are you considering a
        </p>
        <p className="info_bold">
          Housing Advance?
        </p>
        <p className="info_light">
          Limited time reduced interest.
        </p>

        <a href="https://www.linkedin.com/in/ojas-bhosale-51103a251" className="link">Learn More </a>
      </div>
      }
    </div>
  );
};

export default Strategy;
