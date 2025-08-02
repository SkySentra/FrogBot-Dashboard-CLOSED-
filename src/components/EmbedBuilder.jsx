import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function EmbedBuilder({ type = "start", defaultEmbed = {}, onChange }) {
  const [embed, setEmbed] = useState({
    title: "",
    description: "",
    color: "#5865F2",
    image: "",
    footer: "",
    ...defaultEmbed,
  });

  const handleUpdate = (field, value) => {
    const updated = { ...embed, [field]: value };
    setEmbed(updated);
    if (onChange) onChange(updated);
  };

  const markdownComponents = {
    h1: ({ node, ...props }) => <h1 className="text-xl font-bold text-white" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-lg font-semibold text-white" {...props} />,
    p: ({ node, ...props }) => <p className="text-sm text-gray-300" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
    em: ({ node, ...props }) => <em className="italic text-gray-300" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-5" {...props} />,
    li: ({ node, ...props }) => <li className="text-sm text-gray-300" {...props} />,
    a: ({ node, ...props }) => <a className="text-blue-400 underline" {...props} />,
    code: ({ node, ...props }) => <code className="bg-[#223247] px-1 rounded text-sm" {...props} />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4 bg-[#1c2a3a] p-6 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 rounded bg-[#223247] text-white"
          value={embed.title}
          onChange={(e) => handleUpdate("title", e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 rounded bg-[#223247] text-white"
          value={embed.description}
          onChange={(e) => handleUpdate("description", e.target.value)}
        />
        <div className="flex items-center space-x-4">
          <label className="text-gray-300 text-sm">Color:</label>
          <input
            type="color"
            className="w-10 h-10"
            value={embed.color}
            onChange={(e) => handleUpdate("color", e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 rounded bg-[#223247] text-white"
          value={embed.image}
          onChange={(e) => handleUpdate("image", e.target.value)}
        />
        <input
          type="text"
          placeholder="Footer"
          className="w-full p-2 rounded bg-[#223247] text-white"
          value={embed.footer}
          onChange={(e) => handleUpdate("footer", e.target.value)}
        />
      </div>

      <div className="bg-[#2f3136] text-white rounded-lg p-4 space-y-2 shadow-md">
        <div style={{ borderLeft: `4px solid ${embed.color}` }} className="pl-4">
          {embed.title && (
            <div className="text-sm font-semibold text-white">
              <ReactMarkdown components={markdownComponents}>{embed.title}</ReactMarkdown>
            </div>
          )}
          {embed.description && (
            <div className="text-sm text-gray-300 whitespace-pre-line">
              <ReactMarkdown components={markdownComponents}>{embed.description}</ReactMarkdown>
            </div>
          )}
          {embed.image && (
            <img
              src={embed.image}
              alt="Embed visual"
              className="mt-2 max-h-48 object-cover rounded"
            />
          )}
          {embed.footer && (
            <div className="text-xs text-gray-500 mt-2">
              <ReactMarkdown components={markdownComponents}>{embed.footer}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}