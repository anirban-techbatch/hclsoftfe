export const Page=({theme,titleIcon,icons  })=>{

    return ( <div
        className="page"
        style={{
          backgroundColor: theme.pageBg,
          boxShadow: `0 0 20px ${theme.shadowColor}`,
        }}
      >
        <div
          className="title-box"
          style={{
            backgroundColor: theme.titleBoxBg,
          }}
        >
          <img src={titleIcon} alt="Title Icon" className="title-logo" />
          <h1
            className="title-text"
            style={{
              color: theme.textColor,
            }}
          >
            React UI Project
          </h1>
        </div>
        <div className="icon-row">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="icon-container"
              onClick={() => handleIconClick(icon.src)}
              style={{
                '--icon-color': theme.iconColor,
                '--icon-hover-color': theme.iconHoverColor,
                '--hotspot-color': theme.hotspotColor,
              }}
            >
               
              <img  style={{
                  width: '80px',
                  height: '80px',
                  filter: `brightness(0) saturate(100%) invert(0)`,
                  fill: theme.iconColor, 
                }} src={icon.src} alt={icon.id} className="icon" />
            </div>
          ))}
        </div>
      </div>)

}