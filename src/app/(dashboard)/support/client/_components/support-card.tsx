"use client";

import { Card, Col, Form, Row, Select } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

const { Meta } = Card;

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: "پشتیبان",
    description: "پایگاه داده قدرتمند و مطمئن برای پروژه‌های شما",
    image: "/images/chat.jpg",
  },
  {
    id: 2,
    title: "پشتیبان",
    description: "سیستم امنیتی پیشرفته برای محافظت از داده‌ها",
    image: "/images/chat.jpg",
  },
  {
    id: 3,
    title: "پشتیبان",
    description: "عملکرد بهینه و سریع در تمامی شرایط",
    image: "/images/chat.jpg",
  },
  {
    id: 4,
    title: "پشتیبان",
    description: "فضای نامحدود برای ذخیره‌سازی فایل‌ها",
    image: "/images/chat.jpg",
  },
  {
    id: 5,
    title: "پشتیبان",
    description: "دسترسی از هر نقطه جهان با سرعت بالا",
    image: "/images/chat.jpg",
  },
  {
    id: 6,
    title: "پشتیبان",
    description: "حفاظت پیشرفته در برابر تهدیدات سایبری",
    image: "/images/chat.jpg",
  },
  {
    id: 6,
    title: "پشتیبان",
    description: "حفاظت پیشرفته در برابر تهدیدات سایبری",
    image: "/images/chat.jpg",
  },
  {
    id: 6,
    title: "پشتیبان",
    description: "حفاظت پیشرفته در برابر تهدیدات سایبری",
    image: "/images/chat.jpg",
  },
  {
    id: 6,
    title: "پشتیبان",
    description: "حفاظت پیشرفته در برابر تهدیدات سایبری",
    image: "/images/chat.jpg",
  },
];

export function SupportCards() {
  return (
    <div className=" rounded-xl border-2 border-border bg-card p-8">
      <div className="space-y-1 w-full">
        {/* Label */}
        <span className="top-3 bg-card px-1 text-sm font-bold text-foreground">
          کلاینت
        </span>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} sm={24} lg={12}>
            <Select
              className="w-full"
              size="large"
              placeholder="انتخاب کلاینت"
              allowClear
            />
          </Col>
        </Row>
      </div>
      <Row gutter={[16, 16]} className="py-4">
        {features.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={6} lg={6}>
            <Link href={"/support/test"}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.5, delay: 0 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:shadow-lg"
              >
                <Card
                  className={`$
                    //    "opacity-50 cursor-not-allowed" : ""
                    `}
                  hoverable
                  cover={
                    <img
                      alt={item.title}
                      src={item.image}
                      className="w-full h-48 object-cover opacity-90"
                    />
                  }
                >
                  <Meta title={item.title} />
                </Card>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
