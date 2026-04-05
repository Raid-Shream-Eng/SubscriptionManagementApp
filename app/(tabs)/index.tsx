import ListHeadings from "@/components/ListHeadings";
import SupscriptionCard from "@/components/SupscriptionCard";
import UpComingSupscriptionsCard from "@/components/UpComingSupscriptionsCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedSupscriptionId, setExpandedSupscriptionId] = useState<
    string | null
  >(null);
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="home-">
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View>
                <Image
                  source={images.avatar}
                  className="h-10 w-10 rounded-full"
                />
                <Text className="home-user-name">{HOME_USER.name}</Text>

                <Image source={icons.add} className="home-add-icon" />
              </View>
              <View className="home-balance-card">
                <Text className="home-balance-label">Total Balance</Text>
                <View className="home-balance-row">
                  <Text className="home-balance-amount">
                    {formatCurrency(HOME_BALANCE.amount)}
                  </Text>
                  <Text className="home-balance-date">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format(" MM-DD")}
                  </Text>
                </View>
              </View>
              <View className="home-upcoming-subscriptions">
                <ListHeadings title="Upcoming" />
                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (
                    <UpComingSupscriptionsCard {...item} />
                  )}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={<Text>No upcoming renewals yet. </Text>}
                ></FlatList>
              </View>
              <ListHeadings title="All Supscriptions" />
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SupscriptionCard
              {...item}
              expanded={expandedSupscriptionId === item.id}
              onPress={() =>
                setExpandedSupscriptionId((currentId) =>
                  currentId === item.id ? null : item.id,
                )
              }
            />
          )}
          extraData={expandedSupscriptionId}
          ItemSeparatorComponent={() => <View className="h-4" />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text>No subscriptions found.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
