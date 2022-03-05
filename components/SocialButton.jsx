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
      className="
        bg-black rounded-full w-8 h-8 cursor-pointer inline-flex items-center justify-center transition-all duration-300 ease-in text-white
        dark:bg-white hover:bg-gradient-to-r hover:from-secondary hover:to-primary
      "
    >
      {children}
    </a>
  );
};

export default SocialButton
