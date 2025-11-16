"use client";

import React, { useState, useEffect } from "react";
import { Button, Card, Empty, Spin, Typography } from "antd";

export type TabType = {
    key: string;
    title: string;
    disable?: boolean;
    content?: React.ReactNode;
    children?: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
};

interface Props {
    tabs?: TabType[];
    defaultActiveTab?: number;
    actions?: React.ReactNode[];
    children?: React.ReactNode;
    loading?: boolean;
}

export default function CustomTabs({ tabs = [], defaultActiveTab = 0, actions, children, loading = false }: Props) {

    function validateActiveIndex(index: number): number {
        return index >= 0 && index < tabs.length ? index : 0;
    };

    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    useEffect(() => {
        if (tabs.length > 0) {
            setActiveTab(prevActiveTab => validateActiveIndex(prevActiveTab))
        }
    }, [tabs]);

    const handleTabClick = (index: number) => {
        if (!tabs[index]?.disable) setActiveTab(index)
    };

    return (
        <Spin spinning={loading} tip={<Typography className="py-4 text-typography-secondary">در حال دریافت اطلاعات ...</Typography>}>
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                <div className="flex w-full items-center justify-between gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                    <ul className="flex w-3/4 overflow-x-auto p-1 text-sm font-medium text-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                        {tabs.map((tab, index) => (
                            <li key={tab.key} className="min-h-10 md:min-h-12 lg:min-h-12">
                                <Button
                                    className={`min-h-10 md:min-h-12 lg:min-h-12 ${activeTab !== index ? "bg-[#EAF3F3]" : ""}`}
                                    type={activeTab === index ? "primary" : "default"}
                                    onClick={() => handleTabClick(index)}
                                    icon={tab.icon && <tab.icon className="hidden md:block" />}
                                    disabled={tab.disable}
                                >
                                    {tab.title}
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex max-md:flex-col-reverse items-center w-1/4 min-h-10 md:min-h-12 lg:min-h-12 justify-center gap-1 md:gap-2 lg:gap-4 xl:gap-6">
                        {actions?.map((action, index) => (
                            <React.Fragment key={index}>{action}</React.Fragment>
                        ))}
                    </div>
                </div>
                {children
                    ? children
                    : <>{tabs[activeTab]?.children ?? tabs[activeTab]?.children}</>
                }
                <Card>
                    {tabs[activeTab]?.content === null || tabs[activeTab]?.content === undefined
                        ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        : tabs[activeTab]?.content
                    }
                </Card>
            </div>
        </Spin>
    );
};