'use client';

import React from 'react'
import Progress from './Progress'
import { Suspense } from 'react';
import ClientMeta from '@/utils/ClientMeta';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const Providers = ({ children }) => {
  return (
    <>
      <ClientMeta />
      {children}
      <Progress />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default Providers
