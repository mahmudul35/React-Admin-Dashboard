import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

// const SIDE_BAR=[
//     {
//         name:"Overview",
//         icon: BaChart2,
//         color:"#6366f1"
//         path:"/"
//     },
//     {
//         name:"Products",
//         icon: ShoppingBag,
//         color:"#6366f1",
//         href:"/products",
//     },
//     {
//         name:"Users",
//         icon: Users,
//         color:"#6366f1",
//         href:"/users"
//     },
//     {
//         name:"Sales",
//         icon: DollarSign,
//         color:"#6366f1",
//         href:"/sales"
//     },
//     {
//         name:"Analytics",
//         icon: BaChart2,
//         color:"#6366f1",
//         href:"/analytics"
//     },
//     {
//         name:"Settings",
//         icon: Settings,
//         color:"#6366f1",
//         href:"/settings"
//     },

// ]

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-full hover:bg-gray-700 max-w-fit p-2"
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
}
