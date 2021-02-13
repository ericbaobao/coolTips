import React from "react";
import {
  ViewStyle,
  TextStyle,
  TextProps as TextProperties,
  StyleProp,
  TextInputProps,
  ImageProps as RNImageProps
} from "react-native";

// eslint-disable-next-line no-shadow
enum Border {
  roundedSquare,
  singleLine,
  squareBox
}

// eslint-disable-next-line no-shadow
enum FieldType {
  normal,
  password,
  email
}

export interface ShakableInputProps {
  /* add a ? behind the variable name to represent it's optional
     placeholder is the grey text that you can replace with
  */
  title?: string;
  placeholder?: string;
  errorText?: string;
  inputType?: FieldType;
  borderType?: Border;
  icon?: boolean | React.ReactElement<unknown>;
  backgroundColor?: string;
  iconColor?: string;
  shakeRef?: () => void;
}

export interface TextProps extends TextProperties {
  /**
   * font size 40
   */
  h1?: boolean;

  /**
   * font size 34
   */
  h2?: boolean;

  /**
   * font size 28
   */
  h3?: boolean;

  /**
   * font size 22
   */
  h4?: boolean;

  /**
   * Styling for when `h1` is set
   */
  h1Style?: StyleProp<TextStyle>;

  /**
   * Styling for when `h2` is set
   */
  h2Style?: StyleProp<TextStyle>;

  /**
   * Styling for when `h3` is set
   */
  h3Style?: StyleProp<TextStyle>;

  /**
   * Styling for when `h4` is set
   */
  h4Style?: StyleProp<TextStyle>;

  /**
   * Additional styling for Text
   */
  style?: StyleProp<TextStyle>;
}

export type IconNode = boolean | React.ReactElement<unknown>;

export interface InputProps extends TextInputProps {
  /**
   * Styling for Input Component Container (optional)
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Disables the input field
   */
  disabled?: boolean;

  /**
   * Style of the input field when disabled
   */
  disabledInputStyle?: StyleProp<TextStyle>;

  /**
   * Styling for Input Component Container (optional)
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Displays an icon to the left (optional)
   */
  leftIcon?: IconNode;

  /**
   * Styling for left Icon Component container
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Displays an icon to the right (optional)
   */
  rightIcon?: IconNode;

  /**
   * Styling for the right icon container
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Renders component in place of the React Native `TextInput` (optional)
   */
  InputComponent?: React.ComponentType<any>;

  /**
   * 	Adds styling to input component (optional)
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * 	Add styling to error message (optional)
   */
  errorStyle?: StyleProp<TextStyle>;

  /**
   * 	Adds error message (optional)
   */
  errorMessage?: string;

  /**
   * 	props to be passed to the React Native Text component used to display the error message (optional)
   */
  errorProps?: TextProps;

  /**
   * 	Add styling to label (optional)
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * 	Adds label (optional)
   */
  label?: string | React.ReactElement<unknown>;

  /**
   *  props to be passed to the React Native Text component used to display the label (optional)
   */
  labelProps?: TextProps;

  /**
   *  displays error message
   */
  renderErrorMessage?: boolean;
}

export class Input extends React.Component<InputProps> {
  /**
   * Shakes the Input
   *
   * eg `this.inputRef.shake()`
   */
  shake(): void;

  /**
   * Calls focus on the Input
   *
   * eg `this.inputRef.focus()`
   */
  focus(): void;

  /**
   * Calls isFocused() on the Input
   *
   * eg `let focused = this.inputRef.isFocused()`
   */
  isFocused(): boolean;

  /**
   * Calls blur on the Input
   *
   * eg `this.inputRef.blur()`
   */
  blur(): void;

  /**
   * Calls clear on the Input
   *
   * eg `this.inputRef.clear()`
   */
  clear(): void;

  /**
   * Calls setNativeProps on the Input
   *
   * eg `this.inputRef.setNativeProps({ text: 'any text' })`
   */
  setNativeProps(nativeProps: Partial<TextInputProps>): void;
}
