import React from "react";
import "../style/style.scss";


function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  } 



function Slide({ img,offset,title,paragraf }) {
    const active = true ;
    const ref = useTilt(active);
  
    const [mauseHover, setMauseHover] = React.useState(false);
    const changeHover = () => {
      setMauseHover((prev) => !prev);
    };
  
    const styleHover = {
      backgroundColor: "rgba(128, 128, 128, 0.755)",
    };
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
      >
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${img}')`,
          }}
        >
          <div
            className="slideContentInner"
            // style={mauseHover ? styleHover : ""}
            onMouseEnter={changeHover}
            onMouseLeave={changeHover}
          >
            <h2 className="slideTitle">{title}</h2>
            {/* <h3 className="slidesubtitle">{paragraf}</h3> */}
          </div>
        </div>
      </div>
    );
  }
const SlideTemplate = ({img,title, paragraf}) =>{

  return (
         <Slide img={img} title={title} paragraf={paragraf} />
  );
}

export default SlideTemplate;
