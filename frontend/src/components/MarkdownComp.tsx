import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  file: string;
}

const MarkdownComp: React.FC<Props> = ({ file }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((text) => {
        console.log(text);
        setPost(text);
      });
  }, [file]);

  return (
    <div>
      <ReactMarkdown className="prose">{post}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComp;