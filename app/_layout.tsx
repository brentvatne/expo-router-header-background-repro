import { Stack } from 'expo-router';

// No header background options anywhere: this shows the defaults.
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Header defaults' }} />
      <Stack.Screen name="inline" options={{ title: 'Inline title' }} />
      <Stack.Screen name="large" options={{ title: 'Large title', headerLargeTitle: true }} />
    </Stack>
  );
}
