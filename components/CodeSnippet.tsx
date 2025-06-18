"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { CopyIcon, CheckIcon } from "@/components/icons";

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  className?: string;
  maxHeight?: string;
  filename?: string;
}

export const CodeSnippet = ({
  code,
  language = "javascript",
  title,
  showLineNumbers = true,
  showCopyButton = true,
  className = "",
  maxHeight = "400px",
  filename,
}: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const formatCode = (code: string, showNumbers: boolean) => {
    const lines = code.split('\n');
    if (!showNumbers) return code;
    
    return lines.map((line, index) => {
      const lineNumber = (index + 1).toString().padStart(3, ' ');
      return `${lineNumber} ${line}`;
    }).join('\n');
  };

  return (
    <Card className={`w-full ${className}`}>
      {(title || filename) && (
        <div className="px-4 py-2 border-b border-divider bg-default-50 dark:bg-default-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {filename && (
                <span className="text-xs text-default-500 font-mono">
                  {filename}
                </span>
              )}
              {title && (
                <span className="text-sm font-medium text-default-700 dark:text-default-300">
                  {title}
                </span>
              )}
            </div>
            {showCopyButton && (
              <Tooltip content={copied ? "Copied!" : "Copy code"}>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={handleCopy}
                  className="text-default-500 hover:text-default-700"
                >
                  {copied ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <CopyIcon />
                  )}
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
      )}
      <CardBody className="p-0">
        <div
          className="overflow-auto bg-default-900 text-default-100"
          style={{ maxHeight }}
        >
          <pre className="p-4 m-0 text-sm font-mono leading-relaxed">
            <code className={`language-${language}`}>
              {formatCode(code, showLineNumbers)}
            </code>
          </pre>
        </div>
        {!title && !filename && showCopyButton && (
          <div className="absolute top-2 right-2">
            <Tooltip content={copied ? "Copied!" : "Copy code"}>
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                onPress={handleCopy}
                className="bg-default-100/80 backdrop-blur-sm"
              >
                {copied ? (
                  <CheckIcon className="text-success" />
                ) : (
                  <CopyIcon />
                )}
              </Button>
            </Tooltip>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

// Inline code snippet component for smaller code blocks
interface InlineCodeProps {
  code: string;
  language?: string;
  className?: string;
}

export const InlineCode = ({ code, language = "javascript", className = "" }: InlineCodeProps) => {
  return (
    <code className={`inline-block px-2 py-1 bg-default-100 dark:bg-default-800 text-default-800 dark:text-default-200 rounded text-sm font-mono ${className}`}>
      {code}
    </code>
  );
}; 