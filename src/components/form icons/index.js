import React from 'react';
import { Icon } from 'react-native-elements';
import { __DEFAULT_ICON_SIZE__, __DEFAULT_ICON_COLOR__ } from '../../constants';



const EmailIcon = () => (<Icon name='email' size={__DEFAULT_ICON_SIZE__} color={__DEFAULT_ICON_COLOR__} />);

const LockIcon = () => (<Icon name='https' size={__DEFAULT_ICON_SIZE__} color={__DEFAULT_ICON_COLOR__} />);

const PersonIcon = () => (<Icon name='person' size={__DEFAULT_ICON_SIZE__} color={__DEFAULT_ICON_COLOR__} />);

const InputIcon = () => (<Icon name='input' size={__DEFAULT_ICON_SIZE__} color={__DEFAULT_ICON_COLOR__} />);


export { EmailIcon, LockIcon, PersonIcon, InputIcon };