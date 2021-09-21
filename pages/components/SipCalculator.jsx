import React, { Component } from "react";

export default class SipCalculator extends Component {
  render() {
    return (
      <div>
        <div class="card border-dark mb-3" style="max-width: 20rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h4 class="card-title">Dark card title</h4>
            <fieldset class="form-group">
              <legend>Sliders</legend>
              <label for="customRange1">Example range</label>
              <input type="range" class="custom-range" id="customRange1" />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}
