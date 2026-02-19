export interface ServiceData {
  id: string
  name: string
  piPrice: number
  nprPrice: number
  inrPrice: number
  usdPrice: number
  euroPrice: number
  poundPrice: number
  originalPriceDisplay: string // For displaying the original NPR price string
  description: string
}

// Hardcoded exchange rates for demonstration.
// For daily changing rates, a backend service fetching from a real-time API is required.
export const services: ServiceData[] = [
  {
    id: "sop",
    name: "Statement of Purpose (SOP)",
    piPrice: 0.0000001, // Test Pi price for SOP
    nprPrice: 1800,
    inrPrice: 1125,
    usdPrice: 15,
    euroPrice: 13,
    poundPrice: 11,
    originalPriceDisplay: "NPR 1,800",
    description: "Professional SOP writing for university applications",
  },
  {
    id: "cv",
    name: "Curriculum Vitae (CV)",
    piPrice: 0.0000002, // Example Pi price
    nprPrice: 1200,
    inrPrice: 750,
    usdPrice: 10,
    euroPrice: 9,
    poundPrice: 8,
    originalPriceDisplay: "NPR 1,200",
    description: "ATS-friendly CV writing services",
  },
  {
    id: "appeal",
    name: "Appeal Letter (Canada)",
    piPrice: 0.0000003,
    nprPrice: 2200,
    inrPrice: 1375,
    usdPrice: 18,
    euroPrice: 16,
    poundPrice: 14,
    originalPriceDisplay: "NPR 2,200",
    description: "Visa appeal letters for Canada rejections",
  },
  {
    id: "motivation",
    name: "Motivation Letter",
    piPrice: 0.00000025,
    nprPrice: 1500,
    inrPrice: 938,
    usdPrice: 12.5,
    euroPrice: 11,
    poundPrice: 9.5,
    originalPriceDisplay: "NPR 1,500",
    description: "Compelling motivation letters for applications",
  },
  {
    id: "admission",
    name: "Admission Essay",
    piPrice: 0.0000003,
    nprPrice: 1800,
    inrPrice: 1125,
    usdPrice: 15,
    euroPrice: 13,
    poundPrice: 11,
    originalPriceDisplay: "NPR 1,800",
    description: "University admission essays",
  },
  {
    id: "scholarship",
    name: "Scholarship Essay",
    piPrice: 0.00000028,
    nprPrice: 1600,
    inrPrice: 1000,
    usdPrice: 13.5,
    euroPrice: 12,
    poundPrice: 10,
    originalPriceDisplay: "NPR 1,600",
    description: "Scholarship application essays",
  },
]
