import { MarkdownParser } from '../../parser';

describe('MarkdownParser - Unordered List Bullet Glyph By Depth', () => {
  let parser: MarkdownParser;

  beforeEach(async () => {
    parser = await MarkdownParser.create();
  });

  it('uses a filled dot for top-level items', () => {
    const markdown = '- First\n- Second';
    const result = parser.extractDecorations(markdown);

    const items = result.filter((d) => d.type === 'listItem');
    expect(items).toHaveLength(2);
    expect(items[0].replacement).toBe('• ');
    expect(items[1].replacement).toBe('• ');
  });

  it('uses a hollow circle for second-level items and a square for third-level', () => {
    const markdown = ['- Top', '  - Middle', '    - Bottom'].join('\n');
    const result = parser.extractDecorations(markdown);

    const items = result.filter((d) => d.type === 'listItem');
    expect(items).toHaveLength(3);
    expect(items[0].replacement).toBe('• ');
    expect(items[1].replacement).toBe('○ ');
    expect(items[2].replacement).toBe('▪ ');
  });

  it('cycles back to filled dot past three levels of nesting', () => {
    const markdown = ['- L1', '  - L2', '    - L3', '      - L4'].join('\n');
    const result = parser.extractDecorations(markdown);

    const items = result.filter((d) => d.type === 'listItem');
    expect(items).toHaveLength(4);
    expect(items.map((d) => d.replacement)).toEqual(['• ', '○ ', '▪ ', '• ']);
  });

  it('keeps sibling items at the same depth on the same glyph after returning from a nested list', () => {
    const markdown = ['- Top 1', '  - Nested', '- Top 2'].join('\n');
    const result = parser.extractDecorations(markdown);

    const items = result.filter((d) => d.type === 'listItem');
    expect(items).toHaveLength(3);
    expect(items[0].replacement).toBe('• ');
    expect(items[1].replacement).toBe('○ ');
    expect(items[2].replacement).toBe('• ');
  });
});
