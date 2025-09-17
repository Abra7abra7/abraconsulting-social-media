import { PricingTable } from "@/components/autumn/pricing-table";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Vyber si plán</h1>
      <div className="max-w-6xl mx-auto">
        <PricingTable />
      </div>
    </div>
  );
}