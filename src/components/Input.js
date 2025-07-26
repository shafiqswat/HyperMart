import React, { forwardRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export const Input = forwardRef(
  (
    {
      label,
      placeholder,
      value,
      onChangeText,
      validation,
      required = false,
      style,
      inputStyle,
      labelStyle,
      errorStyle,
      secureTextEntry = false,
      keyboardType = 'default',
      autoCapitalize = 'none',
      nextInputRef,
      returnKeyType = 'done',
      placeholderTextColor,
      Icon,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState('');

    const validateInput = text => {
      if (required && !text.trim()) {
        setError(`${label || 'Field'} is required`);
        return false;
      }

      if (validation && validation.test instanceof RegExp) {
        const isValid = validation.test.test(text); // use `.test()` from RegExp
        if (!isValid) {
          setError(validation.message || 'Invalid input');
          return false;
        }
      }

      setError('');
      return true;
    };

    const handleChangeText = text => {
      onChangeText(text);
      if (error) validateInput(text);
    };

    const handleBlur = () => {
      setIsFocused(false);
      validateInput(value);
    };

    const handleSubmitEditing = () => {
      if (nextInputRef) {
        nextInputRef.current?.focus();
      }
    };

    return (
      <View style={[styles.container, style]}>
        {label && (
          <Pressable>
            <Text style={[styles.label, labelStyle]}>
              {label}
              {required && <Text style={styles.required}>*</Text>}
            </Text>
          </Pressable>
        )}

        <View style={styles.inputWrapper}>
          <TextInput
            ref={ref}
            style={[
              styles.input,
              isFocused && styles.inputFocused,
              error && styles.inputError,
              inputStyle,
              Icon && { paddingRight: 40 }, // make space for icon
            ]}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={placeholderTextColor}
            onChangeText={handleChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            returnKeyType={nextInputRef ? 'next' : returnKeyType}
            onSubmitEditing={handleSubmitEditing}
            blurOnSubmit={!nextInputRef}
            {...props}
          />

          {/* ✅ Right-side Icon */}
          {Icon && <View style={styles.icon}>{Icon}</View>}
        </View>

        {error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  required: {
    color: '#FF3B30',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
    minHeight: 48,
  },
  inputFocused: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  inputError: {
    borderColor: '#FF3B30',
    borderWidth: 1,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
