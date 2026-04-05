import { formatCurrency } from "@/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpComingSupscriptionsCard = ({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View className="">
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text
            className="upcoming-meta"
            style={{ fontSize: 10 }}
            numberOfLines={1}
          >
            {daysLeft} {daysLeft > 1 ? "days left" : "day left"}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name">{name}</Text>
    </View>
  );
};

export default UpComingSupscriptionsCard;
