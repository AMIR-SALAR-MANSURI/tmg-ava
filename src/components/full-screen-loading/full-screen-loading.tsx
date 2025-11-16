"use client"

import React from 'react'
import { Spin, theme, Typography } from 'antd';

export default function FullScreenLoading() {

    const { token: { colorBgBase } } = theme.useToken();

    return (
        <div
            style={{ backgroundColor: colorBgBase }}
            className='h-dvh flex flex-col items-center justify-center gap-12'
        >
            <Spin size='large' />
            <Typography className='text-base'>
                در حال دریافت اطلاعات ...
            </Typography>
        </div>
    )
}
