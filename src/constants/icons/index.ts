import { componentsIcons, ComponentsIcons } from './components';
import { sharedIcons, SharedIcons } from './shared';

export const ALL_ICONS = Object.assign({}, ComponentsIcons, SharedIcons);
export default Object.assign({}, componentsIcons, sharedIcons);
