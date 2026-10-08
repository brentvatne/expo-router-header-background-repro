import { Link, router } from 'expo-router';
import { useEffect } from 'react';
import { Settings, StyleSheet, View } from 'react-native';

export default function Index() {
  // For screenshots without touch input: `-screen inline|large` (launch argument) opens that screen.
  useEffect(() => {
    const screen = Settings.get('screen');
    if (screen === 'inline' || screen === 'large') setTimeout(() => router.push(`/${screen}`), 500);
  }, []);

  return (
    <View style={styles.root}>
      <Link href="/inline" style={styles.link}>Inline title</Link>
      <Link href="/large" style={styles.link}>Large title</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, gap: 16 },
  link: { fontSize: 18, color: '#007AFF' },
});
