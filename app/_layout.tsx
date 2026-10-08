import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import type { ReactNode } from 'react';
import { Settings } from 'react-native';

// `-theme default|dark` (launch argument) wraps the app in a ThemeProvider; without it, expo-router's default theme applies.
const themeArg = Settings.get('theme');
const theme = themeArg === 'dark' ? DarkTheme : themeArg === 'default' ? DefaultTheme : undefined;
const Themed = ({ children }: { children: ReactNode }) =>
  theme ? <ThemeProvider value={theme}>{children}</ThemeProvider> : <>{children}</>;

// No header background options anywhere: this shows the defaults.
export default function Layout() {
  return (
    <Themed>
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
      {/* Default theme with a dark screen background: the clear bar shows this background behind the theme's title color. */}
      <Stack.Screen name="inline-dark-content" options={{ title: 'Dark content', contentStyle: { backgroundColor: '#000' } }} />
      <Stack.Screen name="inline-color" options={{ title: 'Explicit color', headerStyle: { backgroundColor: '#FFE08A' } }} />
    </Stack>
    </Themed>
  );
}
