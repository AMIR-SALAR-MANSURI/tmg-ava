"use client"

import { Typography } from "antd";

interface Props {
    title: string;
    discretion?: React.ReactNode
    Icon?: React.ComponentType<{ className?: string | undefined }>;
    actions?: React.ReactNode[];
}

export default function CustomTitleHeader({ title, discretion, Icon, actions }: Props) {

    return (
        <div className="flex overflow-x-auto p-1 w-full items-center mb-3 md:mb-4 lg:mb-5 justify-between gap-2 md:gap-4 lg:gap-6 xl:gap-8">
            <div className="flex w-3/4 flex-col items-start gap-2">
                <div className="flex items-center">
                    {Icon && <Icon className="size-5" />}
                    <Typography className="text-base mr-2">
                        {title}
                    </Typography>
                </div>
                <Typography className="text-typography-secondary text-sm">{discretion}</Typography>
            </div>
            <div className="flex w-1/4 items-center max-md:flex-col-reverse gap-2">
                {actions?.map((item, index) =>
                    <div key={index} className="w-full">{item}</div>
                )}
            </div>
        </div>
    )
}
