import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function Footer() {
    return (
        <>
            <footer className="footer" style={{backgroundColor: '#4f4789'}}>
                <div className="content">
                    <div className="is-flex is-justify-content-space-around is-align-items-center" style={{color: '#c0d4f8', paddingLeft: '18%', paddingRight: '18%'}}>
                        <div className="is-flex-direction-column text-center">
                            <p><strong style={{fontSize: '28px'}}>Regulate</strong></p>
                            <a href="https://nextjs-portfolio-92yvlktgj-emilyjryan.vercel.app/">by Emily Ryan</a>
                        </div>
                  
                        <a className="" href="https://www.linkedin.com/in/emilyjudithryan/">LinkedIn</a>
            
                        <a className="" href="https://github.com/emilyjryan">GitHub</a>
                      
                        <a className="" href="https://nextjs-portfolio-92yvlktgj-emilyjryan.vercel.app/">Portfolio</a>

                    </div>
                </div>
            </footer>
        </>
    )
}