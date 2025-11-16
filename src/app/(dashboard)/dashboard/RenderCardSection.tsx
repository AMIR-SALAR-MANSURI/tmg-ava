// import { Divider, Row, Col, Card, Typography } from "antd";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ColorPickerToken } from "antd/lib/color-picker/style";

// const { Meta } = Card;
// const { Title } = Typography;

// type CardItem = {
//   title: string;
//   link: string;
//   disabled?: boolean;
//   description?: string;
//   icon?: React.ReactNode;
// };

// type RenderCardSectionProps = {
//   title: string;
//   data: CardItem[];
//   borderColor?: React.ComponentProps<"div">["className"];
// };

// const RenderCardSection = ({
//   title,
//   data,
//   borderColor,
// }: RenderCardSectionProps) => {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm mb-8">
//       <Title level={4} className="text-gray-800 font-semibold mb-6">
//         {title}
//       </Title>

//       <Row gutter={[24, 24]}>
//         {data.map((card, index) => (
//           <Col key={index} xs={24} sm={12} md={8} lg={6}>
//             <Link href={card.disabled ? "#" : card.link} passHref>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: index * 0.02,
//                   ease: "easeOut",
//                 }}
//               >
//                 <Card
//                   hoverable
//                   className={`${borderColor}
//                     h-full transition-all duration-300  border-r-4
//                     border hover:border-${borderColor}
//                     ${card.disabled ? "opacity-70 cursor-not-allowed" : ""}
//                   `}
//                 >
//                   <div className="flex flex-col items-center text-center p-4">
//                     {card.icon && (
//                       <div className="text-3xl mb-3">{card.icon}</div>
//                     )}
//                     <Meta
//                       title={
//                         <span className="text-gray-800">{card.title}</span>
//                       }
//                       description={
//                         <span className="text-gray-500">
//                           {card.description || "Explore more"}
//                         </span>
//                       }
//                       className="w-full"
//                     />
//                   </div>
//                   {card.disabled && (
//                     <div className="absolute font-bold inset-0 bg-white bg-opacity-70 flex items-center justify-center">
//                       <span className="text-gray-600 text-lg font-bold">
//                         بزودی...
//                       </span>
//                     </div>
//                   )}
//                 </Card>
//               </motion.div>
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default RenderCardSection;
"use client";

import { Divider, Row, Col, Card } from "antd";
import Link from "next/link";
import { motion } from "framer-motion";

const { Meta } = Card;

type CardItem = {
  title: string;
  image: string;
  link: string;
  disabled?: boolean;
};

type RenderCardSectionProps = {
  title: string;
  data: CardItem[];
};

const RenderCardSection = ({ title, data }: RenderCardSectionProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md mt-2 shadow-md">
      <Divider orientation="left">{title}</Divider>
      <Row gutter={[16, 16]}>
        {data.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={6} lg={6}>
            <Link href={card.disabled ? "" : card.link}>
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
                  className={`${
                    card.disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  hoverable
                  cover={
                    <img
                      alt={card.title}
                      src={card.image}
                      className="w-full h-48 object-cover opacity-90"
                    />
                  }
                >
                  <Meta title={card.title} />
                </Card>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RenderCardSection;
