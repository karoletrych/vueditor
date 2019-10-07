export interface P {
    type: 'p';
}

export interface Input {
    type: 'input';
}

export interface Div {
    type: 'div';
}

export type HtmlTag = P | Input | Div;

export interface ComponentTag {type: 'componentTag'; componentName: string; }

export type Tag = HtmlTag | ComponentTag;

export interface Attribute {
    key: string;
    value?: string;
}

export interface HtmlString {
    type: 'htmlString';
    content: string;
}
export interface Binding {
    type: 'binding';
    bindingExpression: string;
}

export type ElementContent = HtmlString | Binding | Element;

export interface Element {
    type: 'element';
    tag: Tag;
    attributes: Attribute[];
    elementContents: ElementContent[];
}


