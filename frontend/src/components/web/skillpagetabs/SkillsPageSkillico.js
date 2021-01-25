import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';
import { Row, Item } from '@mui-treasury/components/flex';

import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

export default function GrowIconButton(props) {
  const largeStyles = useSizedIconButtonStyles({ childSize: 64, padding: 2 });
  const defaultGrowStyles = useGrowIconButtonStyles();
  const customGrowStyles = useGrowIconButtonStyles({ color: '#ABCFF8', thickness: 2 });
  return (
    <IconButton
          classes={largeStyles}
          className={[customGrowStyles.root,'webskillimagebtn'].join(' ')}
          
        >
          <img
            alt={''}
            src={
              props.skillicon
              }
          />
        </IconButton>
  );
};