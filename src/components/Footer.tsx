import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function Footer() {
    return (
        <>
            <footer className="footer" style={{backgroundColor: '#2b2d42'}}>
                <div className="content has-text-centered">
                    <div className="columns text-center" style={{paddingLeft: '18%', paddingRight: '18%'}}>
                        <p className="column"><strong>Regulate</strong> by <a href="https://nextjs-portfolio-92yvlktgj-emilyjryan.vercel.app/">Emily Ryan</a></p>
                        <br></br>
                        <a className="column" href="https://www.linkedin.com/in/emilyjudithryan/">LinkedIn</a>
                        <br></br>
                        <a className="column" href="https://github.com/emilyjryan">GitHub</a>
                        <br></br>
                        <a className="column" href="https://nextjs-portfolio-92yvlktgj-emilyjryan.vercel.app/">Portfolio</a>
                    </div>
                </div>
            </footer>
        </>
    )
}