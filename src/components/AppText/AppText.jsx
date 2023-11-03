import React from 'react';


const AppText = ({
  content,
  gray,
  bold,
  small,
  light,
  large,
  medium,
  header,
  thin,
  center,
  invert,
  before,
  styles,
}) => {
  return (
    <h1
      className={`relative text-black01q leading-snug lg:leading-normal sm:leading-normal
        ${gray ? 'text-gray-500' : ''} 
        ${light ? 'font-light' : ''} 
        ${bold ? ' font-extrabold !text-black' : ''} 
        ${small ? 'text-sm' : ''} 
        ${medium ? 'text-[20px] lg:text-2xl' : ''} 
        ${
          large
            ? 'lg:font-normal text-3xl lg:text-6xl !text-black leading-tight lg:leading-tight'
            : ''
        } ${header && 'text-[25px] lg:text-[45px] !text-black'} 
        ${thin ? '!font-extralight' : ''} 
        ${center ? 'text-center' : ''} 
        ${invert ? '!text-white' : ''} 
        ${styles}`}
    >
      {content}
      {before && (
        <span className="absolute left-[10px] lg:left-[-5px] w-[15px] h-[15px] top-0 lg:w-[24px] lg:h-[24px] bg-brand-yellow z-[-1]"></span>
      )}
    </h1>
  );
};

export default AppText;
