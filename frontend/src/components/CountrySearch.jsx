import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function CountrySearch({
  countries,
  label = "Destino",
  placeholder = "Ingresa un pais",
  buttonText = "Buscar",
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const matches = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return countries.slice(0, 12);
    }
    return countries
      .filter((country) => country.toLowerCase().includes(trimmed))
      .slice(0, 12);
  }, [countries, query]);

  const handleSelect = (country) => {
    setQuery(country);
    setIsOpen(false);
  };

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    setIsOpen(false);
    navigate(`/country/${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="search-card">
      <div className="search-field">
        <label htmlFor="country" className="field-label">
          {label}
        </label>
        <div className="input-wrap">
          <input
            id="country"
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              setTimeout(() => setIsOpen(false), 120);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSearch();
              }
            }}
            autoComplete="off"
          />
          <span className="input-icon">Go</span>
        </div>
        {isOpen && matches.length > 0 && (
          <div className="suggestions" role="listbox">
            {matches.map((country) => (
              <button
                key={country}
                type="button"
                className="suggestion"
                role="option"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleSelect(country)}
              >
                {country}
              </button>
            ))}
          </div>
        )}
      </div>
      <button className="search-btn" type="button" onClick={handleSearch}>
        {buttonText}
      </button>
    </div>
  );
}

export default CountrySearch;
