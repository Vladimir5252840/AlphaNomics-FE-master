import React, { useContext, useEffect } from 'react';
import { darkthemeContext } from '../themestore/context';

const ThemeWrapper = ({ children }) => {
  const { state: { darktheme } } = useContext(darkthemeContext);

  useEffect(() => {
    (async () => {
      if (darktheme)
        await import("../theme.scss");
      else await import('../white-theme.scss');
    })();
  }, [darktheme]);

  return ({ children });
}

export default ThemeWrapper;