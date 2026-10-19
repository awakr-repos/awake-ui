'use client';

import { Slider as BaseUISlider } from '@base-ui/react/slider';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';
import './styles.css';

function Root(props: ComponentProps<typeof BaseUISlider.Root>) {
  return <BaseUISlider.Root {...props} className={clsx('awake-slider-root', props.className)} />;
}

function Control(props: ComponentProps<typeof BaseUISlider.Control>) {
  return <BaseUISlider.Control {...props} className={clsx('awake-slider-control', props.className)} />;
}

function Track(props: ComponentProps<typeof BaseUISlider.Track>) {
  return <BaseUISlider.Track {...props} className={clsx('awake-slider-track', props.className)} />;
}

function Indicator(props: ComponentProps<typeof BaseUISlider.Indicator>) {
  return <BaseUISlider.Indicator {...props} className={clsx('awake-slider-indicator', props.className)} />;
}

function Thumb(props: ComponentProps<typeof BaseUISlider.Thumb>) {
  return <BaseUISlider.Thumb {...props} className={clsx('awake-slider-thumb', props.className)} />;
}

export const Slider = { Root, Control, Track, Indicator, Thumb };
