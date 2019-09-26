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
    Key: string;
    Value?: string;
}

export interface HtmlString {
    type: 'htmlString';
    Content: string;
}
export interface Binding {
    type: 'binding';
    BindingExpression: string;
}

export type ElementContent = HtmlString | Binding | Element;

export interface Element {
    type: 'element';
    Tag: Tag;
    Attributes: Attribute[];
    ElementContents: ElementContent[];
}


