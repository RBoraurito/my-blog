import React from 'react';
import dynamic from 'next/dynamic';

const Icons = ({name, size}) => {
  const Icon = dynamic(() => import(`icons/${name}.svg`));
  return <Icon
    width={size}
    height={size}
    viewBox="0 0 48 48"
  />
};

export default Icons;
