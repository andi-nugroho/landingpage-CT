import { BarChart3, ShieldCheck, Wallet, ArrowUpDown } from "lucide-react";

export const features = [
  {
    title: "Advanced Trading Interface",
    description: "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/public/features1.png"
  },
  {
    title: "Portfolio Management",
    description: "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
    icon: <Wallet className="w-6 h-6" />,
    image: "/public/features2.png"
  },
  {
    title: "Security & Verification",
    description: "Industry-leading security measures with KYC verification process to protect your assets.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/public/features3.png"
  },
  {
    title: "Performance Analytics",
    description: "Detailed analytics and credit scoring system to help you make informed decisions.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/public/features4.png"
  }
];