import * as Ast from './htmlAst';

export interface Stringify<a> { stringify: (x: a) => string; }

export const StringifyHtmlTag: Stringify<Ast.HtmlTag> = { stringify: x => x.type };
export const StringifyComponentTag: Stringify<Ast.ComponentTag> = { stringify: x => x.componentName };
export const StringifyTag: Stringify<Ast.Tag> = {
    stringify: x => {
        if (x.type === 'componentTag')
            return StringifyComponentTag.stringify(x);
        else
            return StringifyHtmlTag.stringify(x);
    },
};

export const StringifyBinding: Stringify<Ast.Binding> = { stringify: x => '{{' + x.BindingExpression + '}}' };
export const StringifyAttribute: Stringify<Ast.Attribute> = { stringify: x => x.Key + '=' + '"' + x.Value + '"'};

export const StringifyElement: Stringify<Ast.Element> = { stringify: x => {
        const contents = x.ElementContents.map(content => {
            if (content.type === 'htmlString') {
                return content.Content;
            }
            else if (content.type === 'binding') {
                return '{{' +  content.BindingExpression + '}}';
            }
            else if (content.type === 'element')
                return StringifyElement.stringify(content);

        }).join('');
        const attributes = x.Attributes.map(attr => StringifyAttribute.stringify(attr)).join(' ');

        return '<' + StringifyTag.stringify(x.Tag) + (attributes.length > 0 ? ' ' : '') +
            attributes +
            '>' +
            contents +
            '</' + StringifyTag.stringify(x.Tag) + '>';
        },
};


