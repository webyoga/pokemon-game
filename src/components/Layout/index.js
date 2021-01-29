import s from './style.module.css';
//import img1 from "../../assets/bg1.jpg";

const Layout = (props) => {
    return (
     <>
    <section className={s.root} id={props.id} style={{ background: `${props.urlBg}, ${props.colorBg}` }}>

       <div className={s.wrapper}>
        
          <article>
           <div className={s.title}>

                <h3>
                  {props.title}
                </h3>
                <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
                <p>
                  {props.descr}
                </p>
            </div>
        </article>
    </div>
</section>
</>
)
}

export default Layout;


