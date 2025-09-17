import { feature, product, priceItem, featureItem } from "atmn";

export const premiumVideos = feature({
  id: "premium_videos",
  name: "Premium Videos",
  type: "boolean",
});

export const free = product({
  id: "free",
  name: "Free",
  is_default: true,
  items: [],
});

export const pro = product({
  id: "pro",
  name: "Pro",
  items: [
    priceItem({
      price: 29,
      interval: "month",
      currency: "EUR",
    }),
    featureItem({
      feature_id: premiumVideos.id,
    }),
  ],
});