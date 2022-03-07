import React from 'react'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <a
      title={label}
      href={href}
      className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-300 ease-in bg-black rounded-full cursor-pointer  dark:bg-white dark:text-gray-900 hover:bg-gradient-to-r hover:from-secondary hover:to-primary"
    >
      {children}
    </a>
  );
};

export default SocialButton
