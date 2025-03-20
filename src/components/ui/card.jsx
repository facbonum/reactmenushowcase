// src/components/ui/card.jsx

export function Card({ children }) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">{children}</div>
    );
  }
  
  export function CardContent({ children }) {
    return (
      <div className="p-4 text-white">
        {children}
      </div>
    );
  }
  