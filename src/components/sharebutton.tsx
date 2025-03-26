"use client"
import { Link2, Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import { WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailShare = () => {
    const emailSubject = encodeURIComponent(title);
    const emailBody = encodeURIComponent(`Check out this blog post: ${url}`);
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>

      <button
        onClick={handleEmailShare}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-white transition-colors"
      >
        <Mail size={20} className="text-red-500"/>
      </button>

      <button
        onClick={handleCopyLink}
        className="p-2 rounded-full  bg-gray-200 hover:bg-gray-300 dark:bg-white transition-colors"
      >
        <Link2 size={20} className="text-blue-600 dark:text-blue-600" />
      </button>

      {copied && (
        <span className="text-sm text-green-500 animate-fade-in">
          Link copied!
        </span>
      )}
    </div>
  );
}