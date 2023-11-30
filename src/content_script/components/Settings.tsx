import * as React from 'react';

import SettingsImage from '../../assets/settings.png';

function Settings() {
  return (
    <div className="App3">
      <div className="content">
        <div className="buttonContainer">
          <button type="button">
            <img className="settingsImage" src={SettingsImage} alt="settings" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
