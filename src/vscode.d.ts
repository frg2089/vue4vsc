import { FASTElement } from '@microsoft/fast-element'
import {
  Badge,
  Button,
  Checkbox,
  DataGrid,
  DataGridCell,
  DataGridRow,
  Divider,
  Dropdown,
  Link,
  Option,
  Panels,
  PanelTab,
  PanelView,
  ProgressRing,
  Radio,
  RadioGroup,
  Tag,
  TextArea,
  TextField,
} from '@vscode/webview-ui-toolkit'
import type { HTMLAttributes } from 'vue'

type IgnoreAttributes =
  | 'ELEMENT_NODE'
  | 'ATTRIBUTE_NODE'
  | 'TEXT_NODE'
  | 'CDATA_SECTION_NODE'
  | 'ENTITY_REFERENCE_NODE'
  | 'ENTITY_NODE'
  | 'PROCESSING_INSTRUCTION_NODE'
  | 'COMMENT_NODE'
  | 'DOCUMENT_NODE'
  | 'DOCUMENT_TYPE_NODE'
  | 'DOCUMENT_FRAGMENT_NODE'
  | 'NOTATION_NODE'
  | 'DOCUMENT_POSITION_DISCONNECTED'
  | 'DOCUMENT_POSITION_PRECEDING'
  | 'DOCUMENT_POSITION_FOLLOWING'
  | 'DOCUMENT_POSITION_CONTAINS'
  | 'DOCUMENT_POSITION_CONTAINED_BY'
  | 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC'

interface FASTElementEvents<Element extends FASTElement> {
  onInput: Event & {
    readonly target: Element | null
  }
}

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends (...args: any) => any
    ? E[K]
    : (payload: E[K]) => void
}

type DefineFASTElement<Element extends FASTElement> = new () => Element & {
  /** @deprecated Do not use the $props property on a Custom Element ref, this is for template prop types only. */
  $props: Partial<Omit<Element, IgnoreAttributes>> &
    Omit<HTMLAttributes, 'onInput'> &
    EventHandlers<FASTElementEvents<Element>>
}

type a = OmitFASTAttributes<Badge>
type b = a['CDATA_SECTION_NODE']

declare module 'vue' {
  export interface GlobalComponents {
    'vscode-badge': DefineFASTElement<Badge>
    'vscode-button': DefineFASTElement<Button>
    'vscode-checkbox': DefineFASTElement<Checkbox>
    'vscode-data-grid': DefineFASTElement<DataGrid>
    'vscode-data-grid-cell': DefineFASTElement<DataGridCell>
    'vscode-data-grid-row': DefineFASTElement<DataGridRow>
    'vscode-divider': DefineFASTElement<Divider>
    'vscode-dropdown': DefineFASTElement<Dropdown>
    'vscode-link': DefineFASTElement<Link>
    'vscode-option': DefineFASTElement<Option>
    'vscode-panels': DefineFASTElement<Panels>
    'vscode-panel-tab': DefineFASTElement<PanelTab>
    'vscode-panel-view': DefineFASTElement<PanelView>
    'vscode-progress-ring': DefineFASTElement<ProgressRing>
    'vscode-radio-group': DefineFASTElement<RadioGroup>
    'vscode-radio': DefineFASTElement<Radio>
    'vscode-tag': DefineFASTElement<Tag>
    'vscode-text-area': DefineFASTElement<TextArea>
    'vscode-text-field': DefineFASTElement<TextField>
  }
}
export {}
