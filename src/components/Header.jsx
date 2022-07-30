import React from 'react'

function Header({text, bgColor, textColor}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  };

  return (
    <header>
        <div className='container' style={headerStyle}>
            <h2>{text}</h2>
        </div>
    </header>
  );
}

/*default props values if props are not added*/
Header.defaultProps = {
    text: 'FeedBack UI',
    bgColor: 'rgba(0,0,0,0.8)',
    textColor: '#ff2233'
};

export default Header;