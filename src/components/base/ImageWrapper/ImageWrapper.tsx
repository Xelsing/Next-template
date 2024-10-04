'use client';
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import s from './ImageWrapper.module.scss';

type PropsType = Omit<ImageProps, 'src'> & {
  className?: string;
  onClick?: () => void;
  src: string | StaticImport | undefined;
};

const ImageWrapper = ({
  className = '',
  src,
  alt,
  width,
  height,
  onClick,
  quality = 100,
  fill,
  ...props
}: PropsType) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const initial = baseURL ? baseURL : '';
  const [imgSrc, setImgSrc] = useState('/skeleton.png');

  const [loading, setLoading] = useState(false);

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoad = () => {
    if (baseURL) {
      setImgSrc(`${initial}/${src}`);
    } else {
      setImgSrc(`${src}`);
    }
    setLoading(false);
  };

  const onError = () => {
    if (!loading) {
      setImgSrc('/not-found.png');
    }
  };

  return (
    <div className={className}>
      <Image
        className={s.ImageWrapper}
        onClick={onClick}
        width={width}
        height={height}
        quality={quality}
        src={imgSrc}
        alt={alt}
        fill={fill}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onError={onError}
        {...props}
      />
    </div>
  );
};

export default ImageWrapper;
