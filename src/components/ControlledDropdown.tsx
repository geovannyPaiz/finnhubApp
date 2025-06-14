import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ControlledDropdownProps<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  control: Control<T>;
  name: Path<T>;
  items: DropdownItem[];
  error?: string;
  required?: boolean;
}

const ControlledDropdown = <T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
  items,
  error,
  required,
}: ControlledDropdownProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className="mb-4">
          {label && (
            <Text className="font-trebuchet text-4 text-white mb-2">
              {label} {required ? '*' : ''}
            </Text>
          )}
          <View className="border border-secondary rounded-[8px] px-4">
            <RNPickerSelect
              onValueChange={onChange}
              value={value}
              items={items}
              placeholder={{
                label: placeholder || 'Selecciona una opción...',
                value: null,
                color: '#7D7F84',
              }}
              style={{
                inputAndroid: {
                  fontSize: 16,
                  paddingVertical: 12,
                  color: '#7D7F84',
                  height: 60,
                },
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 12,
                  color: '#7D7F84',
                  height: 60,
                },
              }}
              Icon={() => (
                <View className="flex flex-1 h-[60px] w-8 justify-center items-center">
                  <Icon name="chevron-down" size={16} color="#7D7F84" />
                </View>
              )}
              darkTheme
            />
          </View>
          {error && (
            <Text className="font-trebuchet text-3 text-red-500 mt-1">
              {error}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default ControlledDropdown;
