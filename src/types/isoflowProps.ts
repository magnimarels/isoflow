import { Coords } from 'src/types';
import type { EditorModeEnum, MainMenuOptions } from './common';
import type { Model } from './model';

export type InitialData = Model & {
  zoom?: number;
  scroll?: Coords;
};

export interface IsoflowProps {
  initialData?: InitialData;
  mainMenuOptions?: MainMenuOptions;
  onModelUpdated?: (Model: Model) => void;
  width?: number | string;
  height?: number | string;
  enableDebugTools?: boolean;
  editorMode?: keyof typeof EditorModeEnum;
}
