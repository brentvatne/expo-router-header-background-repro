import { Stack } from 'expo-router';
import { useEffect, useRef } from 'react';
import { ScrollView, Settings, Text, View, type ScrollViewInstance } from 'react-native';

const COLORS = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#007AFF', '#AF52DE'];

/** 40 colored rows in a plain ScrollView. `-scrolled 1` (launch argument) scrolls 400 pt down after mount. */
export function Rows() {
  const ref = useRef<ScrollViewInstance>(null);
  useEffect(() => {
    if (String(Settings.get('scrolled')) === '1') setTimeout(() => ref.current?.scrollTo({ y: 400, animated: false }), 1000);
  }, []);
  return (
    <>
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button icon="square.and.arrow.up" onPress={() => {}} />
      </Stack.Toolbar>
      <ScrollView ref={ref} contentInsetAdjustmentBehavior="automatic">
        {Array.from({ length: 40 }, (_, i) => (
          <View key={i} style={{ height: 56, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: COLORS[i % COLORS.length] }}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}>Row {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
