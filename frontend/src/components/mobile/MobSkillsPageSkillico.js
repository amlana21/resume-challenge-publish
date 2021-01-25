import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';
import { Row, Item } from '@mui-treasury/components/flex';

import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

export default function GrowIconButton() {
  const largeStyles = useSizedIconButtonStyles({ childSize: 64, padding: 2 });
  const defaultGrowStyles = useGrowIconButtonStyles();
  const customGrowStyles = useGrowIconButtonStyles({ color: '#ABCFF8', thickness: 2 });
  return (
    <IconButton
          classes={largeStyles}
          className={customGrowStyles.root}
          
        >
          <img
            alt={''}
            src={
              'https://s2.qwant.com/thumbr/0x380/6/5/4c09d1fdffb7467b8547e4e8172ede3b098ec73789f890fec8f8a2c4b36e42/docker-icon_copy.png?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-network-round-gloss-shine%2F512%2Fdocker-icon_copy.png&q=0&b=1&p=0&a=1'
            }
          />
        </IconButton>
  );
};