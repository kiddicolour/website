import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Select, Option } from './styles'
import useLanguage from '../../../hooks/useLanguage'

export const LanguageSelect = ({ onChange }) => {

  const [language, toggleLanguage] = useLanguage()

  return (
    <Wrapper>
      <Select onChange={onChange}>
        <Option value={language}>{language}</Option>
      </Select>
    </Wrapper>
  )
}


LanguageSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
}

