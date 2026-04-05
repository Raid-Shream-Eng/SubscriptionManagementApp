import {
    formatCurrency,
    formatStatusLabel,
    formatSubscriptionDateTime,
} from "@/lib/utils";
import clsx from "clsx";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const SupscriptionCard = ({
  name,
  price,
  icon,
  currency,
  billing,
  color,
  category,
  plan,
  renewalDate,
  expanded,
  paymentMethod,
  startDate,
  status,
  onPress,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        "rounded-2xl border border-border p-4",
        expanded ? " bg-subscription " : " bg-card",
      )}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="flex-row items-center py-2">
        <View className="min-w-0 flex-1 flex-row items-center gap-3">
          <Image source={icon} className="size-16 rounded-lg" />
          <View className="min-w-0 flex-1">
            <Text
              className="mb-1 text-lg font-sans-bold text-primary"
              numberOfLines={1}
            >
              {name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-sm font-sans-semibold text-muted-foreground"
            >
              {category?.trim() || plan?.trim() || renewalDate
                ? formatSubscriptionDateTime(renewalDate)
                : "No details available"}
            </Text>
          </View>
        </View>
        <View className="ml-3 shrink-0 items-end">
          <Text className=" mb-1 text-lg font-sans-bold text-primary">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="text-sm font-sans-medium text-muted-foreground">
            {billing}
          </Text>
        </View>
      </View>
      {expanded && (
        <View className=" mt-6 gap-4">
          <View className="gap-6">
            <View className="flex-row items-center justify-between gap-3">
              <View className="flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">
                  Payment:
                </Text>
                <Text
                  className="flex-1 font-sans-bold text-primary"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {paymentMethod?.trim() || "Not provided"}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between gap-3">
              <View className="flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">
                  Category:
                </Text>
                <Text
                  className="flex-1 font-sans-bold text-primary"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category?.trim() || plan?.trim() || "Not provided"}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between gap-3">
              <View className="flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">
                  Strted at:
                </Text>
                <Text
                  className="flex-1 font-sans-bold text-primary"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {startDate
                    ? formatSubscriptionDateTime(startDate)
                    : "Not provided"}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between gap-3">
              <View className="flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">
                  Renewal Date:
                </Text>
                <Text
                  className="flex-1 font-sans-bold text-primary"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {renewalDate
                    ? formatSubscriptionDateTime(renewalDate)
                    : "Not provided"}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between gap-3">
              <View className="flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">
                  Status :
                </Text>
                <Text
                  className="flex-1 font-sans-bold text-primary"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {status ? formatStatusLabel(status) : "Not provided"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SupscriptionCard;
