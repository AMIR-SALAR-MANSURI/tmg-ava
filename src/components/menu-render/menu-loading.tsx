import { Skeleton } from 'antd'
import React from 'react'

export default function MenuLoading() {
    return (
        <div className="flex flex-col px-2 mt-3 gap-4">
            <Skeleton active />
            <Skeleton.Input className="w-full" active size="small" />
            <Skeleton.Input active className="w-2/3" size="small" />
            <Skeleton active />
            <Skeleton.Input className="w-full" active size="small" />
            <Skeleton.Input active className="w-1/2" size="small" />
            <Skeleton.Input active className="w-full mt-2" size="small" />
            <Skeleton.Input active className="w-1/2" size="small" />
            <Skeleton.Input className="w-full" active size="small" />
            <Skeleton.Input active className="w-2/3" size="small" />
            <Skeleton.Input className="w-full" active size="small" />
        </div>
    )
}
