const Button = ({ label, onClick, type = 'button', className = '', disabled, icon }) => (
  <button type={type} className={`btn ${className}`} onClick={onClick} disabled={disabled}>
      {icon && <span>
        <img src={icon} alt={label} />
      </span>}
      {label}
    </button>
);

export default Button;
