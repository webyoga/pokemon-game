import s from './style.module.css';
//import img1 from "../../assets/bg1.jpg";

const Layout = ({ id, title, urlBg, colorBg, children, colorTitle }) => {
//  console.log('####: props', props);
  const sectionStyle = {};
//  const styleRoot = urlBg && colorBg ? { backgroundImage: `${img1}`} : { backgroundImage: 'none'} ;
//const styleRoot = urlBg ? { backgroundImage: `url(${img1})`} : { backgroundColor: `${colorBg}`} ;
    if (urlBg) {
      sectionStyle.backgroundImage = `url(${urlBg})`;
    }
    if (colorBg) {
      sectionStyle.backgroundColor = colorBg;
    }

    return (
     <>
    <section 
         className={s.root} 
         style={sectionStyle}
         id={id}
    >

       <div className={s.wrapper}>
        
          <article>
           <div className={s.title}>

                <h3>
                  {title}
                </h3>
                <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
              {children}
            </div>
        </article>
    </div>
</section>
</>
)
}

export default Layout;


