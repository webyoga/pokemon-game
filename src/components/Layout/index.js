import s from './style.module.css';
//import img1 from "../../assets/bg1.jpg";

const Layout = ({ id, title, descr, urlBg = false, colorBg = false}) => {
  const styleRoot = urlBg && colorBg ? { background: `${urlBg}, ${colorBg}` } : {};
    return (
     <>
    <section className={s.root} style={styleRoot}>

       <div className={s.wrapper}>
        
          <article>
           <div className={s.title}>

                <h3>
                  {title}
                </h3>
                <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
                <p>
                  {descr}
                </p>
            </div>
        </article>
    </div>
</section>
</>
)
}

export default Layout;


