import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View className="flex flex-col bg-red-400">
      <Text className="bg-red-200 text-xl">Gonna style this one with Nativewind</Text>
    </View>
  );
}
