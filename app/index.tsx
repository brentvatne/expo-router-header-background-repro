import { Link, router } from 'expo-router';
import { useEffect } from 'react';
import { Settings, StyleSheet, View } from 'react-native';

const SCREENS = ['inline', 'large', 'inline-system', 'inline-color', 'inline-dark-content', 'inline-title-attrs', 'large-title-attrs'];

export default function Index() {
  // For screenshots without touch input: `-screen <name>` (launch argument) opens that screen.
  useEffect(() => {
    const screen = Settings.get('screen');
    if (typeof screen === 'string' && SCREENS.includes(screen)) setTimeout(() => router.push(`/${screen}` as never), 500);
  }, []);

  return (
    <View style={styles.root}>
      <Link href="/inline" style={styles.link}>Inline title</Link>
      <Link href="/large" style={styles.link}>Large title</Link>
      <Link href="/inline-system" style={styles.link}>Inline, no background color</Link>
      <Link href="/inline-color" style={styles.link}>Inline, explicit color</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, gap: 16 },
  link: { fontSize: 18, color: '#007AFF' },
});
