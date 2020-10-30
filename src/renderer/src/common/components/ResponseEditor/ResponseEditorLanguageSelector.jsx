import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

import {
  LANGUAGES,
} from './config';

export default function RouteResponseLanguageSelector({ currentLanguage, onChangeLanguage }) {
  const menuItems = Object.values(LANGUAGES).map((language) => {
    const ifActiveClass = currentLanguage.value === language.value ? ' bg-gray-600 text-white' : '';
    return (
      <Menu.Item
        key={language.value}
        className={`hover:bg-gray-400${ifActiveClass}`}
        onClick={() => onChangeLanguage(language)}
      >
        {language.text}
      </Menu.Item>
    );
  });
  const menu = (
    <Menu>
      {menuItems}
    </Menu>
  );

  return (
    <Dropdown placement="topCenter" overlay={menu}>
      <Button className="flex items-center justify-between text-white hover:text-white" type="text">
        { currentLanguage.text }
        <UpOutlined className="text-sm" />
      </Button>
    </Dropdown>
  );
}

RouteResponseLanguageSelector.propTypes = {
  currentLanguage: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
};
