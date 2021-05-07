import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Wrapper } from './styles';

export const Header = () => {
  const getWindowDimensions = () => {
    if (window.innerWidth < 768) {
      return 'mobile';
    } else if (window.innerWidth >= 992) {
      return 'desktop';
    } else if (window.innerWidth >= 768) {
      return 'tablet';
    }
  }
  const [device, setDevice] = useState(getWindowDimensions());

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDevice('mobile');
    } else if (window.innerWidth >= 992) {
      setDevice('desktop');
    } else if (window.innerWidth >= 768) {
      setDevice('tablet');
    }
  }
  window.addEventListener('resize', handleResize);

  return (
    <Wrapper>
      <Navbar device={device} />
    </Wrapper>
  );
};
