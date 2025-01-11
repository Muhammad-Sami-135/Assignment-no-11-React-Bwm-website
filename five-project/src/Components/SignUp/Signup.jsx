import Style from "./Signup.module.css"
import sign from "../../assets/signup image.jpg"
import { purple } from "@mui/material/colors"

function Signup({ toogleFunc }) {

    return (
        <>
            <div className={Style.main}>
                <div>
                    <h1 className={Style.head}>Sign up</h1>
                    {/* <p className={Style.Para}>Already have account <a href="#" onClick={}>login here</a></p> */}
                    <label className={Style.label}>Ful Name</label>
                    <input className={Style.Input} type="text" />
                    <br />
                    <br />
                    <label className={Style.label}>Email Id </label>
                    <input className={Style.Input} type="email" />
                    <br />
                    <br />
                    <label className={Style.label}>Password</label>
                    <input className={Style.Input} type="password" />
                    <br />
                    <br />
                    <input type="checkbox" /> by signing up to agree to recive update and special offers.
                    <br />
                    <br />
                    <button className={Style.button} onClick={toogleFunc}>Sign up</button>
                </div>
                <div className={Style.Image}>
                    <img src={sign} alt="" />
                </div>
            </div>
        </>
    )
}

export default Signup
