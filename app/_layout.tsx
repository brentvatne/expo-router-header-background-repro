import { Stack } from 'expo-router';

// No header background options anywhere: this shows the defaults.
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Header defaults' }} />
      <Stack.Screen name="inline" options={{ title: 'Inline title' }} />
      <Stack.Screen name="large" options={{ title: 'Large title', headerLargeTitle: true }} />
      {/*
        react-native-screens with no background color: expo-router (like react-navigation) always passes
        `colors.card`, so the native-props override is the only way to reach the "no background" path.
      */}
      <Stack.Screen
        name="inline-system"
        options={{ title: 'No background color', unstable_nativeProps: { headerConfig: { backgroundColor: undefined } } }}
      />
      {/* An explicit background color must keep its current behavior (solid in both states). */}
      <Stack.Screen name="inline-color" options={{ title: 'Explicit color', headerStyle: { backgroundColor: '#FFE08A' } }} />
    </Stack>
  );
}
