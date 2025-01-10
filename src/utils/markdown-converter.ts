import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeAttrs from 'rehype-attr';
import rehypeRaw from 'rehype-raw';

export const convertMarkdownTextToHtml = async (text: string): Promise<string> => {
    if(!text) return '';

    const processor = unified()
        .use(remarkParse) // Convert into markdown AST
        .use(remarkRehype, { allowDangerousHtml: true }) // Transform to HTML AST
        .use(rehypeRaw)
        .use(rehypeStringify) // Convert AST into serialized HTML
        .use(rehypeAttrs, { properties: 'attr' }); // Add attributes to Markdown

    const html = await processor.process(text);
    return html.toString();
}