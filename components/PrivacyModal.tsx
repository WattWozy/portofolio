interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const PrivacyModal = ({
  isOpen,
  onClose,
  onAccept,
}: PrivacyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Privacy Notice</h2>
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            This website collects and stores IP addresses for the purpose of
            tracking visitor statistics. Your IP address is stored securely and
            is partially masked for privacy (e.g., 192.168.***.***).
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            This data is used solely for analytics and is not shared with third
            parties.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={onClose}
            >
              {"\u{1F449}"}
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              onClick={onAccept}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
