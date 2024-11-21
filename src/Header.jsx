export const Header=({theme,toggleTheme})=>{
    return(<header className="header" style={{ borderBottomColor: theme.borderColor,backgroundColor:theme.headerBg }}>
        <img src="/widgetsInc.svg" alt="Widgets Inc." className="logo" />
        <div className="toggle-container" onClick={toggleTheme}>
          <img src={theme.toggleIcon} alt="Toggle" className="toggle-icon" />
          <span className="toggle-label" style={{ color: theme.textColor }}>
            {theme.label}
          </span>
        </div>
      </header>)
}