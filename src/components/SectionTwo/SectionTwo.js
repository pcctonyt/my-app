import React from "react";
import "./SectionTwo.css";
import OfferButton from "../Buttons/OfferButton";
import SubmitButton from "../Buttons/SubmitButton";

const SectionTwo = () => {
  return (
    <div className="section-two-wrapper" id="section-2">
        <h3 className="two">Nuclear/SDI Unit Rules:</h3>
        <form>
          <h5>Allow them?</h5>
          <label className="form-control two-radio" htmlFor="nucNo-nucYes">Yes
            <input type="radio" name="nucNo-nucYes" value="nucYes" id="nucYes" checked/>
          </label>
          <label className="form-control two-radio" htmlFor="nucNo-nucYes">No
            <input type="radio" name="nucNo-nucYes" id="nucNo" value="nucNo" />
          </label>
        </form>
        <form>
          <h5>Yield for Strategic Nuclear - SN:</h5>
          <label className="form-control two-radio" htmlFor="nuc2x2-nuc3x3">2x2
            <input type="radio" name="nuc2x2-nuc3x3" value="nuc2x2" id="nuc2x2" checked/>
          </label>
          <label className="form-control two-radio" htmlFor="nuc2x2-nuc3x3">2x3
            <input type="radio" name="nuc2x2-nuc3x3" id="nuc2x3" value="nuc2x3" />
          </label>
          <label className="form-control two-radio" htmlFor="nucNo-nucYes">3x3 
            <input type="radio" name="nuc2x2-nuc3x3" id="nuc3x3" value="nuc3x3" />
          </label>
        </form>
        <form>
            <h5>Points Settings:</h5>
            <label htmlFor="depPts">
              <input type="number" min="-10" step="1" max="10" name="depPts" placeholder="0" />Deploy:
            </label>
            <label htmlFor="actPts-buySDI">
              <input type="number" min="-10" step="1" max="10" name="actPts" placeholder="0"/>Activate:
            </label>
            <label htmlFor="armPts-buySDI">
              <input type="number" min="-10" step="1" max="10" name="armPts" placeholder="0"/>Arm:
            </label>
            <label htmlFor="firPts-buySDI">
              <input type="number" min="-10" step="1" max="10"name="firPts"  placeholder="0"/>Fire:
            </label>
            <label htmlFor="firPts-buySDI">
              <input type="number" min="-10" step="1" max="10"name="buySDI"  placeholder="-2"/>B:
            </label>
        </form>
        <form>

        </form>
        <OfferButton />
        <SubmitButton />
    </div>
  )
}

export default SectionTwo;