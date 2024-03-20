import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

import s from './ImageWrapper.module.scss';

type PropsType = ImageProps & {
  className?: string;
  onClick?: () => void;
};

const ImageWrapper = ({
  className = '',
  src,
  alt,
  width = 200,
  height = 200,
  onClick,
  quality = '100',
  ...props
}: PropsType) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [imgSrc, setImgSrc] = useState(`${baseUrl}/${src}`);

  return (
    <Image
      className={clsx({
        [s.ImageWrapper]: true,
        [className]: !!className,
      })}
      onClick={onClick}
      width={width}
      height={height}
      quality={quality}
      src={imgSrc}
      alt={imgSrc}
      onError={() => {
        setImgSrc('/not-found.png');
      }}
      {...props}
    />
  );
};

export default ImageWrapper;
