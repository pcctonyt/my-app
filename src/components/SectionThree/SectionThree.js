import React from "react";
import "./SectionThree.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionThree = () => {
  return (
    <div className="section-three-wrapper" id="section-3">
        <h3 className="three">Handing Off and Arming:</h3>
        <form>
          <h5>Allow Handoff Moves - MSDI, MTN, MIN only:</h5>
          <label className="form-control three-radio" htmlFor="ho1-ho3">None
            <input type="radio" name="ho1-ho3" id="ho1" value="ho1" />
          </label>
          <label className="form-control three-radio" htmlFor="ho1-ho3">Adjacent
            <input type="radio" name="ho1-ho3" value="ho2" id="ho2" checked />
          </label>
          <label className="form-control three-radio" htmlFor="ho1-ho3">Adjacent/Distant
            <input type="radio" name="ho1-ho3" id="ho3" value="ho3" />
          </label>
        </form>
        <form>
            <h5>Count as Complete Turn?</h5>
            <label className="form-control three-radio" htmlFor="hoy-hon">Yes
              <input type="radio" name="hoy-hon" value="yes" id="hoy" checked />
            </label>
            <label className="form-control three-radio"htmlFor="hoy-hon">No
              <input type="radio" name="hoy-hon" value="no" id="hon" />
            </label>
        </form>
        <form>
          <h5>Distance Arming is Whole Turn?</h5>
          <label className="form-control three-radio" htmlFor="ary-arn">Yes
              <input type="radio" name="ary-arn" value="yes" id="hoy" checked />
            </label>
            <label className="form-control three-radio"htmlFor="ary-arn">No
              <input type="radio" name="ary-arn" value="no" id="hon" />
            </label>
        </form>
        <OfferButton />
        <SubmitButton />
    </div>
  )
}

export default SectionThree;