import { md } from "./plugins/md";
import fs from 'fs';
import { baseParse, ElementNode } from '@vue/compiler-core';

export default {
  plugins: [md()],
  assetsDir: 'assets', // 将默认的 _assets 改为 _custom_assets
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options;
      const file = fs.readFileSync(path).toString();
      const parsed = baseParse(file).children.find(
        n => (n as ElementNode).tag === 'demo'
      ) as ElementNode | undefined;

      if (!parsed || !parsed.children.length) {
        throw new Error('No <demo> block found or it has no children.');
      }

      const titleNode = parsed.children[0];
      
      // Ensure the node is of type TextNode and has content
      if (titleNode.type !== 2 || !('content' in titleNode)) {
        throw new Error('The first child of <demo> must be a text node with content.');
      }

      const title = titleNode.content;
      const main = file.split(parsed.loc.source).join('').trim();

      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    }
  }
}
