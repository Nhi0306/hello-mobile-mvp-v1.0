import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DEFAULT_GREETING = 'Hello, World!';
const MAX_NAME_LENGTH = 40;

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState(DEFAULT_GREETING);

  const handleGreet = () => {
    const trimmedName = name.trim();
    setGreeting(trimmedName ? `Hello, ${trimmedName}!` : DEFAULT_GREETING);
    Keyboard.dismiss();
  };

  const handleReset = () => {
    setName('');
    setGreeting(DEFAULT_GREETING);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <Text style={styles.eyebrow}>ET4711 · REACT NATIVE + EXPO</Text>
              <Text style={styles.title}>Hello Mobile MVP</Text>
              <Text style={styles.subtitle}>
                Nhập tên của bạn để nhận một lời chào thật đơn giản.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.label}>Tên của bạn</Text>

              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ví dụ: Nhi"
                placeholderTextColor="#94A3B8"
                maxLength={MAX_NAME_LENGTH}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleGreet}
                selectionColor="#1E90FF"
                accessibilityLabel="Ô nhập tên"
              />

              <Text style={styles.hint}>Tối đa {MAX_NAME_LENGTH} ký tự</Text>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Gửi lời chào"
                onPress={handleGreet}
                style={({ pressed }) => [
                  styles.button,
                  styles.primaryButton,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.primaryButtonText}>Chào</Text>
              </Pressable>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Đặt lại tên và lời chào"
                onPress={handleReset}
                style={({ pressed }) => [
                  styles.button,
                  styles.secondaryButton,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.secondaryButtonText}>Đặt lại</Text>
              </Pressable>

              <View style={styles.greetingBox}>
                <Text style={styles.greetingLabel}>Lời chào</Text>
                <Text
                  style={styles.greeting}
                  accessibilityLiveRegion="polite"
                >
                  {greeting}
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EAF3FF',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 24,
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  title: {
    color: '#0F172A',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
  label: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderColor: '#CBD5E1',
    borderRadius: 14,
    borderWidth: 1,
    color: '#0F172A',
    fontSize: 17,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  hint: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 6,
  },
  button: {
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    marginTop: 12,
    minHeight: 50,
    paddingHorizontal: 16,
  },
  primaryButton: {
    backgroundColor: '#1E90FF',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  greetingBox: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 22,
    padding: 18,
  },
  greetingLabel: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  greeting: {
    color: '#1D4ED8',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
  },
});
