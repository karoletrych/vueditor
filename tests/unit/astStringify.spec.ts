import { expect } from 'chai';
import * as Ast from '@/core/htmlAst';
import * as StringifyAst from '@/core/astStringify';

describe('AstStringify', () => {
  it('stringifies AST', () => {
    const o: Ast.Element = {
      type: 'element',
      tag: {type: 'div'},
      attributes: [{key: 'v-show', value: 'true'}],
      elementContents: [
          {
              type: 'element',
              tag: {type: 'p'},
              attributes: [],
              elementContents: [
                  {type: 'binding', bindingExpression: 'greeting' },
                  {type: 'htmlString', content: ' World!'},
              ],
          },
      ],
    };

    expect(StringifyAst.StringifyElement.stringify(o)).to.be.equal(
          `<div v-show="true"><p>{{greeting}} World!</p></div>`);
  });
});
