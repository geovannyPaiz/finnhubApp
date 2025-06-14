import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

interface ControlledInputTextProps<T extends FieldValues>
  extends TextInputProps {
  label?: string;
  rightIcon?: React.ReactNode;
  error?: string;
  control: Control<T>;
  name: Path<T>;
  keyboardType?: KeyboardTypeOptions;
  required?: boolean;
}

const ControlledInputText = <T extends FieldValues>({
  label,
  secureTextEntry,
  placeholder,
  onPress,
  rightIcon,
  error,
  control,
  name,
  keyboardType,
  required,
}: ControlledInputTextProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View className="flex">
          <Text className="font-trebuchet text-4 text-white mb-2">
            {label}
            {required ? '*' : ''}
          </Text>
          <View className="flex-row justify-between items-center h-[56px] border rounded-[8px] border-secondary">
            <TextInput
              value={value}
              onChangeText={valueInput => onChange?.(valueInput)}
              className="h-[56px] px-4 font-trebuchet text-4 text-secondary flex-1"
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              placeholderTextColor="#7D7F84"
              onBlur={onBlur}
              keyboardType={keyboardType}
            />
            {rightIcon && (
              <TouchableOpacity
                className="h-10 flex justify-center items-center px-1 pr-3"
                onPress={onPress}
              >
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
          {error && (
            <Text className="font-trebuchet text-3 text-red-500">{error}</Text>
          )}
        </View>
      )}
    />
  );
};

export default ControlledInputText;
