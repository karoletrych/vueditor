import { expect } from 'chai';
import * as Ast from '@/core/htmlAst';
import * as StringifyAst from '@/core/astStringify';

describe('AstStringify', () => {
  it('stringifies AST', () => {
    const o: Ast.Element = {
      type: 'element',
      Tag: {type: 'div'},
      Attributes: [{Key: 'v-show', Value: 'true'}],
      ElementContents: [
          {
              type: 'element',
              Tag: {type: 'p'},
              Attributes: [],
              ElementContents: [
                  {type: 'binding', BindingExpression: 'greeting' },
                  {type: 'htmlString', Content: ' World!'},
              ],
          },
      ],
    };

    expect(StringifyAst.StringifyElement.stringify(o)).to.be.equal(
          `<div v-show="true"><p>{{greeting}} World!</p></div>`);
  });
});
