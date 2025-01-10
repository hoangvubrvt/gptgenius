import React from 'react';

const HtmlContent = ({ content, className }: {content: string; className: string}) => {
    return (
        <div className={className}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default HtmlContent;