import React from 'react';
import { Tag, TagProps } from 'antd';

export interface StatusColumnsType<T = undefined> {
    label: string;
    value: T;
    color?: TagProps["color"];
    icon?: React.ReactElement;
}

interface Props<T> {
    list: StatusColumnsType<T>[]
    record?: T
}

export default function StatusColumns<T>({ list, record }: Props<T>) {
    return (
        <>
            {list
                .filter(item => item.value === record)
                .map((item, index) => {
                    const { label, color, icon: Icon = <></> } = item;
                    return (
                        <Tag key={index} color={color}>
                            <div className='flex items-center justify-center gap-2'>
                                {label}
                                {React.cloneElement(Icon, { className: 'md:size-5 size-4' })}
                            </div>
                        </Tag>
                    );
                })}
            {list.every(item => item.value !== record) && <span className='text-2xl'>-</span>}
        </>
    );
}
