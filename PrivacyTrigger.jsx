export default function PrivacyTrigger({ text = "Política de Privacidade", className = "" }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-privacy-modal'));
  };

  return (
    <button 
      onClick={handleClick} 
      className={`hover:text-white transition-colors cursor-pointer text-left ${className}`}
    >
      {text}
    </button>
  );
}
