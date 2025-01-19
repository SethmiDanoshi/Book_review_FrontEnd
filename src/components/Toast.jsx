import React, { createContext, useState, useContext } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 ${
          toast.type === 'success' 
            ? 'bg-green-500' 
            : 'bg-red-500'
        } text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}>
          {toast.type === 'success' 
            ? <CheckCircle2 className="w-5 h-5" /> 
            : <AlertTriangle className="w-5 h-5" />
          }
          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);