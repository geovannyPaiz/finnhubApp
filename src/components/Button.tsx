import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  label: string;
  loading?: boolean;
  type: 'primary' | 'secondary';
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton = ({
  label,
  loading,
  type,
  onPress,
  disabled,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => (disabled ? {} : onPress())}
      className={`
        w-full py-4 px-3 justify-center items-center rounded-lg
        ${type === 'primary' ? 'bg-primary text-white' : ''}
        ${type === 'secondary' ? 'bg-secondary text-black' : ''}
        ${disabled ? 'opacity-50' : ''}
      `}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <Text className="text-white text-4 font-trebuchet">{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
