import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
      <header id="head" style={{textAlign:"center"}}><h1>RANDOM QUOTE GENERATOR</h1></header>
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}
          </h5>
        </div>
        <button className='link' ><a  href={`https://twitter.com/compose/tweet?hashtags=quotes&text=${this.props.quote}`} target='_blank'><i ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAbFBMVEUAAAAcn+8cofEdofIdovIeofQQn+8dofIdofIYn+8eofIdofIdofEgn+8en/EeovIgn+8cn/Eeo/Mgn+8dofEbn+8dovIbn/IdoPIdn+8doPIeofIdofEdn+8eofEbn/Edn/IeofMdoPIcoPGSUxnnAAAAJHRSTlMAQJC/r18Q/98gX+/vIHCPMIB/EN8wn2CfUL/voGDPcGBvr88kNeLXAAAAy0lEQVR4AcXPRQKDQBAEwJ4loXGNO/D/N8bQQa5J3XbH8R9iLGu1xocNAALFtvjluBBjALj0VNxhw/cZhAAiMkIvZi9IRICUZIZWzgHH34R1Ap0tasKhTdh/7QQfexXP8bFhzTFi64TDtKu/mSYcJeWCFKjP9DnPm+6tNaeduGCDWnjmvAMa4YazBA0b0XlhQi0/L99QS5c3aFw4sQkxdJ3seQQ0uXHoPolbHHpACQsd3iSqdONTMzmU64kDQRpiIryWVUAGm9IIfu8F5dISWzSCVNoAAAAASUVORK5CYII=" alt="error"></img></i></a></button>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
       
      </div>
    );
  }
}

export default QuoteAndAuthor;