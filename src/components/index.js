// @flow
import {
  IndicatorsContainer,
  SelectContainer,
  ValueContainer,
} from './containers';
import {
  ClearIndicator,
  DropdownIndicator,
  LoadingIndicator,
} from './indicators';

import Control from './Control';
import Group from './Group';
import Input from './Input';
import Menu, { MenuList, NoOptionsMessage, LoadingMessage } from './Menu';
import MultiValue from './MultiValue';
import Option from './Option';
import Placeholder from './Placeholder';
import SingleValue from './SingleValue';

export type SelectComponents = {
  ClearIndicator: typeof ClearIndicator,
  Control: typeof Control,
  DropdownIndicator: typeof DropdownIndicator,
  Group: typeof Group,
  IndicatorsContainer: typeof IndicatorsContainer,
  Input: typeof Input,
  LoadingIndicator: typeof LoadingIndicator,
  LoadingMessage: typeof LoadingMessage,
  Menu: typeof Menu,
  MenuList: typeof MenuList,
  MultiValue: typeof MultiValue,
  NoOptionsMessage: typeof NoOptionsMessage,
  Option: typeof Option,
  Placeholder: typeof Placeholder,
  SelectContainer: typeof SelectContainer,
  SingleValue: typeof SingleValue,
  ValueContainer: typeof ValueContainer,
};

export type SelectComponentsConfig = $Shape<SelectComponents>;

export const components: SelectComponents = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  Group: Group,
  IndicatorsContainer: IndicatorsContainer,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  LoadingMessage: LoadingMessage,
  Menu: Menu,
  MenuList: MenuList,
  MultiValue: MultiValue,
  NoOptionsMessage: NoOptionsMessage,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer,
};

type Props = {
  components: SelectComponentsConfig,
};

export const defaultComponents = (props: Props) => ({
  ...components,
  ...props.components,
});
