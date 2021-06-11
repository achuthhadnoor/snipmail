import React, { useState } from 'react'
import Onboarding from '.'
import { glogin, initial, login, signup, finish } from '../../ui/svg/onboard'

export default function Home
    () {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');

    const onStepChange = (s) => { setStep(step) }
    let Current = null
    const form = () => <form className="form">
        <h1>Welcome to Snipmail</h1>
        <input placeholder="email@address.com" value={email} onChange={({ target }) => setEmail(target.value)} />
        <div style={{ textAlign: 'right' }}><button className="btn next " disabled={email === '' ? true : false}>Next</button></div>
    </form>
    switch (step) {
        case 0:
            return (
                <Onboarding
                    Form={form}
                    Svg={initial}
                />
            )
        case 1:
            Current = <Onboarding
                Form={form}
                Svg={login}
            />
            break;
        case 2:
            Current = <Onboarding
                Form={form}
                Svg={signup}
            />
            break;
        case 3:
            Current = <Onboarding
                Form={form}
                Svg={glogin}
            />
            break;
        case 4:
            Current = (
                <Onboarding
                    Form={form}
                    Svg={finish}
                />
            )
            break;
        default:
            Current = <></>
    }

    return (
        <>
            {Current}
            {step === 0 && <button onClick={() => setStep(step - 1)}>previous</button>}
            {step !== 4 && <button onClick={() => setStep(step + 1)}>next</button>}
            {step === 4 && <button>Finish</button>}
            <style>{`
                input{
                    padding:10px;
                    border:none;
                    border-radiue:5px;
                    outline-color:#eb615a;
                }
                ::placeholder{
                    color:#aaa
                }
                .btn{
                    padding:10px ;
                    margin:5px;
                    outline:none;
                    border:1px solid #bbb;
                    color:#bbb;
                    border-radius:5px;
                transition:all .4s cubic-bezier(0.215,0.61,0.355,1);
            }
                .btn:hover{
                    background:#fff;
                    color:#555;
                    border:1px solid #fff;
                    transition:all .4s cubic-bezier(0.215,0.61,0.355,1);
                }
                .btn:disabled  {
                    border:1px solid #ddd;
                    color:#ddd;
                    cursor:no-drop;
                    background:transparent;

                }
            `}</style>
        </>

    )
}

