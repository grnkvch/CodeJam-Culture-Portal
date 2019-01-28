import React from 'react';
import { Language } from 'gatsby-plugin-i18next';
import "./LanguageSwitcher.css"

const LanguageSwitcher = ({ changeLng, lng, availableLngs }) => (
  <select class="languageSelect" onChange={(e) => changeLng(e.target.value)}>
    {
      availableLngs.map((value) => (
        <option key={value} selected={lng === value}>{value}</option>
      ))
    };
  </select>);

export default props => (
  <Language>{lngProps => <LanguageSwitcher {...props} {...lngProps} />}</Language>
);