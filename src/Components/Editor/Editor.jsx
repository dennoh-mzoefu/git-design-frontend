import React from "react";
// import "./main";
import "./style.css";

function Editor() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                id="upload-file"
              />
              <label for="upload-file" className="custom-file-label">
                Choose Image
              </label>
            </div>
            <canvas id="canvas"></canvas>

            <h4 className="text-center my-3">Filters</h4>

            <div className="row my-4 text-center">
              <div className="col-md-3">
                <div className="btn-group btn-group-sm">
                  <button className="filter-btn brightness-remove btn btn-info">
                    -
                  </button>
                  <button className="btn btn-secondary btn-disabled" disabled>
                    Brightness
                  </button>
                  <button className="filter-btn brightness-add btn btn-info">
                    +
                  </button>
                </div>
              </div>

              <div className="col-md-3">
                <div className="btn-group btn-group-sm">
                  <button className="filter-btn contrast-remove btn btn-info">
                    -
                  </button>
                  <button className="btn btn-secondary btn-disabled" disabled>
                    Contrast
                  </button>
                  <button className="filter-btn contrast-add btn btn-info">
                    +
                  </button>
                </div>
              </div>

              <div className="col-md-3">
                <div className="btn-group btn-group-sm">
                  <button className="filter-btn saturation-remove btn btn-info">
                    -
                  </button>
                  <button className="btn btn-secondary btn-disabled" disabled>
                    Saturation
                  </button>
                  <button className="filter-btn saturation-add btn btn-info">
                    +
                  </button>
                </div>
              </div>

              <div className="col-md-3">
                <div className="btn-group btn-group-sm">
                  <button className="filter-btn vibrance-remove btn btn-info">
                    -
                  </button>
                  <button className="btn btn-secondary btn-disabled" disabled>
                    Vibrance
                  </button>
                  <button className="filter-btn vibrance-add btn btn-info">
                    +
                  </button>
                </div>
              </div>
            </div>

            <h4 className="text-center my-3">Effects</h4>

            <div className="row mb-3">
              <div className="col-md-3">
                <button className="filter-btn vintage-add btn btn-dark btn-block">
                  Vintage
                </button>
              </div>
              <div className="col-md-3">
                <button className="filter-btn lomo-add btn btn-dark btn-block">
                  Lomo
                </button>
              </div>
              <div className="col-md-3">
                <button className="filter-btn clarity-add btn btn-dark btn-block">
                  Clarity
                </button>
              </div>
              <div className="col-md-3">
                <button className="filter-btn sincity-add btn btn-dark btn-block">
                  Sin City
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <button className="filter-btn crossprocess-add btn btn-dark btn-block">
                  Cross Process
                </button>
              </div>
              <div className="col-md-3">
                <button className="filter-btn pinhole-add btn btn-dark btn-block">
                  Pinhole
                </button>
              </div>
              <div className="col-md-3">
                <button className="filter-btn nostalgia-add btn btn-dark btn-block">
                  Nostalgia
                </button>
              </div>
              <div className="col-md-3">
                <button className="filter-btn hermajesty-add btn btn-dark btn-block">
                  Her Majesty
                </button>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <button id="download-btn" className="btn btn-primary btn-block">
                  Download Image
                </button>
              </div>
              <div className="col-md-6">
                <button id="revert-btn" className="btn btn-danger btn-block">
                  Remove Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Editor;
