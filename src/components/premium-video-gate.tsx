"use client";
import React from "react";
import { useCustomer } from "autumn-js/react";
import { PricingTable } from "@/components/autumn/pricing-table";

interface PremiumVideoGateProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PremiumVideoGate({ children, fallback }: PremiumVideoGateProps) {
  const { customer, isLoading } = useCustomer();

  if (isLoading) {
    return <div className="w-full py-20 text-center text-muted-foreground">Načítavam…</div>;
  }

  const hasPremiumAccess = Boolean(customer?.features?.premium_videos?.enabled);

  if (hasPremiumAccess) {
    return <>{children}</>;
  }

  if (fallback) return <>{fallback}</>;

  return (
    <div className="border rounded-xl p-6 bg-card">
      <h3 className="text-xl font-semibold mb-2">Prémiový obsah</h3>
      <p className="text-sm text-muted-foreground mb-6">Upgraduj na Pro (29 €/mesiac) a sprístupni si prémiové videá.</p>
      <div className="max-w-4xl mx-auto">
        <PricingTable />
      </div>
    </div>
  );
}