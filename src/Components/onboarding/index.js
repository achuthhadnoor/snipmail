import React from 'react'
import styled from 'styled-components'

export default function Home
    ({ step = 1, form, svg }) {
    return (<>
        <div className="main-container">
            <div className="container ">
                {form}
            </div>
            <div className="container">
                <div className="fade">
                    <div className="gol">
                        {svg}
                    </div>
                </div>
            </div>
        </div>
        <style>{`
            .main-container{
                display:flex;
                height:100vh;
            }
            .container{
                flex:1;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .orange{
                color:orange;
            } 
            .fade{
                background:#ebebeb;
                height:90%;
                width:90%;
                margin:5%;
                border-radius:10px;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .gol{
                height:400px;
                width:400px;
                position:relative;
                border-radius:50%;
                background:linear-gradient(146.75deg, #CACACA 13.39%, rgba(255, 255, 255, 0) 86.56%);
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .form{
                
            }
            h1{
                font-size:2em; 
                padding:.5em 0em;
            }
            @media only screen and (max-width: 800px) {
                .main-container{
                    flex-direction:column-reverse;
                }
            }
            @media only screen and (max-width: 800px) {
                .gol{
                    height:300px;
                    width:300px;
                    padding:10px;
                }
            }
        `}</style>
    </>
    )
}

